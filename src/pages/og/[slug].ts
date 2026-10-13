import { OGImageRoute } from 'astro-og-canvas';

const pages: Record<string, { title: string; description: string }> = {
  home: {
    title: 'Ruby Jha',
    description: 'Engineering Manager · Principal Applied AI Engineer',
  },
  about: {
    title: 'About — Ruby Jha',
    description:
      'Engineering Manager and Principal Applied AI Engineer at State Street. Lead AI engineer on an enterprise RAG agent, plus a self-directed portfolio of 9 AI systems.',
  },
  projects: {
    title: 'Projects — Ruby Jha',
    description: '9 self-directed applied AI systems, each with evaluation results and architecture decision records.',
  },
  blog: {
    title: 'Blog — Ruby Jha',
    description: 'On building AI systems, leading engineering teams, and the decisions behind both.',
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
