import { lazy } from 'react';

export const pages = {
  Home: lazy(() => import('@/pages/Home-page')),
  AboutUs: lazy(() => import('@/pages/About-us-page')),
  Dashboard: lazy(() => import('@/pages/Dashboard-page')),
  Career: lazy(() => import('@/pages/Career-page')),
  ContactUs: lazy(() => import('@/pages/Contact-us-page')),
  Error: lazy(() => import('@/pages/Error-page')),
  Faq: lazy(() => import('@/pages/Faq-page')),
  Gallery: lazy(() => import('@/pages/Gallery-page')),
  OurTeam: lazy(() => import('@/pages/Our-team-page')),
  Portfolio: lazy(() => import('@/pages/Portfolio-page')),
  Services: lazy(() => import('@/pages/Services-page')),
  Login: lazy(() => import('@/pages/Login-page')),
  Register: lazy(() => import('@/pages/Register-page')),
}; 