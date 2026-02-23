import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

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
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/jharuby' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/rubsj' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:rubyjha.jnv@gmail.com' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `© 2026 Ruby Jha · Built with <a class="text-blue-600 underline dark:text-muted" href="https://astro.build/" target="_blank" rel="noopener noreferrer">Astro</a>.`,
};
