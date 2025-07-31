import { pages } from './pages';

export const routesConfig = {
  public: [
    { path: '/', component: pages.Home },
    { path: '/about-us', component: pages.AboutUs },
    { path: '/services', component: pages.Services },
    { path: '/services/portfolio', component: pages.Portfolio },
    { path: '/services/gallery', component: pages.Gallery },
    { path: '/services/faq', component: pages.Faq },
    { path: '/our-team', component: pages.OurTeam },
    { path: '/career', component: pages.Career },
    { path: '/contact-us', component: pages.ContactUs },
    { path: '/error', component: pages.Error },
  ],
  auth: [
    { path: '/login', component: pages.Login },
    { path: '/register', component: pages.Register },
  ],
  protected: [
    { path: '/dashboard', component: pages.Dashboard },
  ],
}; 