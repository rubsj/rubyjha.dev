/**
 * Build-time Mermaid renderer using jsdom as a headless DOM.
 * Called from MermaidDiagram.astro frontmatter so diagrams are static SVG
 * in the final HTML — zero client JavaScript.
 *
 * Why dynamic imports: mermaid reads `document`/`window` at module-evaluation
 * time, so we must set those globals *before* the first `import('mermaid')`.
 * A top-level static import would be hoisted ahead of the polyfill setup.
 */

import { JSDOM } from 'jsdom';

let initialized = false;
let mermaidInstance: (typeof import('mermaid'))['default'] | null = null;

async function init(): Promise<void> {
  if (initialized) return;

  // Provide a minimal DOM so mermaid / d3 can build SVG nodes.
  const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');
  const { window: w } = dom;

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

  // jsdom has no layout engine, so SVGElement.getBBox() and
  // SVGTextElement.getComputedTextLength() are not implemented.
  // Polyfill them with text-length estimates so mermaid can size nodes.
  // (~8 px per character at a typical 14 px monospace label font.)
  const PX_PER_CHAR = 8;
  const LINE_HEIGHT = 20;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (w.SVGElement as any).prototype.getBBox = function (this: Element) {
    const lines = (this.textContent ?? '').split('\n');
    const maxLen = Math.max(...lines.map((l: string) => l.length), 1);
    return { x: 0, y: 0, width: maxLen * PX_PER_CHAR, height: LINE_HEIGHT * lines.length };
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (w.SVGElement as any).prototype.getComputedTextLength = function (this: Element) {
    return (this.textContent ?? '').length * PX_PER_CHAR;
  };

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
      // which jsdom doesn't fully support.
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
