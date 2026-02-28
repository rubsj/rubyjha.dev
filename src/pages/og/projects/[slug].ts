import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';
import { cleanSlug } from '~/utils/permalinks';

const projects = await getCollection('project');

const pages = Object.fromEntries(
  projects.map(({ id, data }) => [
    cleanSlug(id),
    {
      title: data.title,
      description: data.description,
      status: data.status,
    },
  ])
);

const statusColors: Record<string, [number, number, number]> = {
  completed: [34, 197, 94],
  'in-progress': [234, 179, 8],
  planned: [100, 116, 139],
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
    border: {
      color: statusColors[page.status] || [99, 102, 241],
      width: 20,
      side: 'inline-start',
    },
    padding: 60,
    font: {
      title: { color: [255, 255, 255], size: 64, weight: 'Bold' },
      description: { color: [148, 163, 184], size: 28 },
    },
  }),
});
