export const NAV_MENU_ITEMS = [
  { title: 'home', to: '/' },
  { title: 'about', to: '/about-us' },
  {
    title: 'services',
    to: '/services',
    children: [
      { title: 'portfolio', to: '/services/portfolio' },
      { title: 'gallery', to: '/services/gallery' },
      { title: 'faq', to: '/services/faq' },
    ],
  },
  {
    title: 'ourTeam',
    to: '/our-team',
  },
  { title: 'career', to: '/career' },
  { title: 'contact', to: '/contact-us' },
  { title: 'dashboard', to: '/dashboard' },
] as const;
