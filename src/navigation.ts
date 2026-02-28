import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Projects', href: getPermalink('/projects') },
    { text: 'Blog', href: getBlogPermalink() },
    { text: 'About', href: getPermalink('/about') },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [{ text: 'Privacy', href: getPermalink('/privacy') }],
  socialLinks: [],
  footNote: '',
};
