import { OGImageRoute } from 'astro-og-canvas';
import { fetchPosts } from '~/utils/blog';

const allPosts = await fetchPosts();

const seriesMap = new Map<string, string>();
for (const post of allPosts) {
  if (post.series && !seriesMap.has(post.series)) {
    const title = post.series
      .split('-')
      .map((word) => (word.length <= 2 ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1)))
      .join(' ');
    seriesMap.set(post.series, title);
  }
}

const pages = Object.fromEntries(
  Array.from(seriesMap.entries()).map(([slug, title]) => [
    slug,
    {
      title,
      description: 'Blog post series by Ruby Jha',
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
