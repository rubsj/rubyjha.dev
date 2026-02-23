import { getCollection, render } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Project } from '~/types';
import { cleanSlug } from './permalinks';

const getNormalizedProject = async (project: CollectionEntry<'project'>): Promise<Project> => {
  const { id, data } = project;
  const { Content, remarkPluginFrontmatter } = await render(project);
  const slug = cleanSlug(id);

  return {
    id,
    slug,
    title: data.title,
    description: data.description,
    projectNumber: data.projectNumber,
    status: data.status,
    tags: data.tags.map((tag: string) => ({ slug: cleanSlug(tag), title: tag })),
    techStack: data.techStack,
    githubUrl: data.githubUrl,
    demoUrl: data.demoUrl,
    demoType: data.demoType || 'none',
    keyMetrics: data.keyMetrics,
    image: data.image,
    featured: data.featured ?? false,
    publishDate: new Date(data.publishDate),
    Content,
    readingTime: remarkPluginFrontmatter?.readingTime,
  };
};

const load = async (): Promise<Project[]> => {
  const projects = await getCollection('project');
  const normalized = await Promise.all(projects.map((p) => getNormalizedProject(p)));
  return normalized.sort((a, b) => a.projectNumber - b.projectNumber);
};

let _projects: Project[];

export const fetchProjects = async (): Promise<Project[]> => {
  if (!_projects) {
    _projects = await load();
  }
  return _projects;
};

export const findFeaturedProjects = async (): Promise<Project[]> => {
  const projects = await fetchProjects();
  return projects.filter((p) => p.featured);
};

export const findProjectBySlug = async (slug: string): Promise<Project | undefined> => {
  const projects = await fetchProjects();
  return projects.find((p) => p.slug === slug);
};
