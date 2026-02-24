/**
 * Build-time Mermaid renderer using happy-dom as a headless DOM.
 * Called from MermaidDiagram.astro frontmatter so diagrams are static SVG
 * in the final HTML — zero client JavaScript.
 *
 * Why happy-dom instead of jsdom: happy-dom is pure ESM so it works on any
 * Node.js version without CJS/ESM interop issues. jsdom@28+ has a transitive
 * dep (html-encoding-sniffer) that uses CJS require() to load an ESM-only
 * package (@exodus/bytes), which crashes on Node.js < 22.12 in CI.
 *
 * Why dynamic imports: mermaid reads `document`/`window` at module-evaluation
 * time, so globals must be set *before* the first `import('mermaid')`.
 * A top-level static import would be hoisted ahead of the polyfill setup.
 */

import { Window } from 'happy-dom';

let initialized = false;
let mermaidInstance: (typeof import('mermaid'))['default'] | null = null;

async function init(): Promise<void> {
  if (initialized) return;

  // Provide a minimal DOM so mermaid / d3 can build SVG nodes.
  const w = new Window();

  // Use Object.defineProperty so we can override properties that Astro's SSR
  // runtime already defines as read-only getters (e.g. navigator).
  function setGlobal(key: string, value: unknown) {
    try {
      Object.defineProperty(globalThis, key, {
        value,
        writable: true,
        configurable: true,
      });
    } catch {
      // Already locked — skip. Mermaid can usually work without it.
    }
  }

  setGlobal('window', w);
  setGlobal('document', w.document);
  setGlobal('navigator', w.navigator);
  // d3 and mermaid check for SVGElement to detect browser environment
  setGlobal('SVGElement', w.SVGElement);

  // happy-dom (like jsdom) has no layout engine, so SVGElement.getBBox() /
  // getComputedTextLength() return zeros by default.  Mermaid uses these to
  // size nodes; zero values cause dagre to collapse nodes to the same point,
  // making edge paths degenerate — positionEdgeLabel then throws.
  //
  // happy-dom defines getBBox as a non-writable property, so a plain
  //   prototype.getBBox = fn
  // assignment is silently ignored.  We must use Object.defineProperty AND
  // walk the *actual* element prototype chain (not just w.SVGElement) because
  // happy-dom's internal class hierarchy may differ from the exposed window
  // properties.
  const PX_PER_CHAR = 8;
  const LINE_HEIGHT = 20;

  const getBBoxImpl = function (this: Element) {
    const lines = (this.textContent ?? '').split('\n');
    const maxLen = Math.max(...lines.map((l: string) => l.length), 1);
    return { x: 0, y: 0, width: maxLen * PX_PER_CHAR, height: LINE_HEIGHT * lines.length };
  };

  const getComputedTextLengthImpl = function (this: Element) {
    return (this.textContent ?? '').length * PX_PER_CHAR;
  };

  function forcePatch(proto: object) {
    for (const [key, value] of [
      ['getBBox', getBBoxImpl],
      ['getComputedTextLength', getComputedTextLengthImpl],
    ] as const) {
      try {
        Object.defineProperty(proto, key, { value, writable: true, configurable: true });
      } catch {
        /* non-configurable in this environment — skip */
      }
    }
  }

  // 1. Patch via the window-exposed SVGElement prototype (works with jsdom).
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  forcePatch((w.SVGElement as any).prototype);

  // 2. Walk the actual prototype chain of a freshly created SVG text element.
  //    This handles happy-dom whose internal class may not share the same
  //    prototype object as w.SVGElement.
  const testTextEl = w.document.createElementNS('http://www.w3.org/2000/svg', 'text');
  let proto: object | null = Object.getPrototypeOf(testTextEl);
  while (proto !== null && proto !== Object.prototype) {
    forcePatch(proto);
    proto = Object.getPrototypeOf(proto);
  }

  // Dynamic import *after* globals are set so mermaid sees the DOM immediately.
  const mod = await import('mermaid');
  mermaidInstance = mod.default;

  mermaidInstance.initialize({
    startOnLoad: false,
    // 'neutral' theme renders well on both light and dark backgrounds.
    theme: 'neutral',
    securityLevel: 'loose',
    flowchart: {
      useMaxWidth: true,
      // Plain SVG text avoids <foreignObject> / HTML inside SVG,
      // which virtual DOMs don't fully support.
      htmlLabels: false,
    },
  });

  initialized = true;
}

/**
 * Render a Mermaid diagram definition to an SVG string at build time.
 * The returned string is safe to embed with `set:html` in Astro.
 */
export async function renderMermaidToSvg(chart: string): Promise<string> {
  await init();

  const id = `mermaid-ssr-${Math.random().toString(36).slice(2, 9)}`;
  const { svg } = await mermaidInstance!.render(id, chart);

  // Ensure the SVG fills its container width rather than using a fixed pixel value.
  return svg.replace(/(<svg\b[^>]*)\bwidth="[^"]*"/, '$1width="100%"');
}
