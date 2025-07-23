export const NAV_MENU_ITEMS = [
  { title: 'Home', to: '/' },
  { title: 'About Us', to: '/about-us' },
  {
    title: 'Services',
    to: '/services',
    children: [
      { title: 'Portfolio', to: '/services/portfolio' },
      { title: 'Gallery', to: '/services/gallery' },
      { title: 'FAQ', to: '/services/faq' },
    ],
  },
  {
    title: 'Our Team',
    to: '/our-team',
  },
  { title: 'Career', to: '/career' },
  { title: 'Contact', to: '/contact-us' },
  { title: 'Dashboard', to: '/dashboard' },
] as const;
