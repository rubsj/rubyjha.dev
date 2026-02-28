import { OGImageRoute } from 'astro-og-canvas';

const pages: Record<string, { title: string; description: string }> = {
  home: {
    title: 'Ruby Jha',
    description: 'Engineering Manager · Generative AI · Cloud',
  },
  about: {
    title: 'About — Ruby Jha',
    description: 'Engineering Manager and AI Systems Builder with 20+ years of enterprise experience.',
  },
  projects: {
    title: 'Projects — Ruby Jha',
    description: '9 production-grade AI systems spanning synthetic data, RAG, fine-tuning, and multi-agent orchestration.',
  },
  blog: {
    title: 'Blog — Ruby Jha',
    description: 'Thoughts on AI engineering, architecture decisions, and lessons learned.',
  },
};

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'slug',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    bgGradient: [
      [15, 23, 42],
      [30, 41, 59],
    ],
    border: { color: [99, 102, 241], width: 20, side: 'inline-start' },
    padding: 60,
    font: {
      title: { color: [255, 255, 255], size: 64, weight: 'Bold' },
      description: { color: [148, 163, 184], size: 28 },
    },
  }),
});
