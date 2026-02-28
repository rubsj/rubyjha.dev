import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';
import { cleanSlug } from '~/utils/permalinks';

const posts = await getCollection('post');

const pages = Object.fromEntries(
  posts
    .filter((p) => !p.data.draft)
    .map(({ id, data }) => [
      cleanSlug(id),
      {
        title: data.title,
        description: data.category
          ? `${data.category.toUpperCase().replace(/-/g, ' ')} · ${data.excerpt || ''}`
          : data.excerpt || '',
      },
    ])
);

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
