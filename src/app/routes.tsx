import { Routes, Route, Outlet } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LoadingScreen from '@/components/common/loadingScreen/LoadingScreen';
import { MainLayout } from '@/components/layout/mainLayout';

const HomePage = lazy(() => import('@/pages/homePage'));
const AboutUsPage = lazy(() => import('@/pages/aboutUsPage'));
const DashboardPage = lazy(() => import('@/pages/dashboardPage'));
const CareerPage = lazy(() => import('@/pages/careerPage'));
const ContactUsPage = lazy(() => import('@/pages/contactUsPage'));
const ErrorPage = lazy(() => import('@/pages/errorPage'));
const FaqPage = lazy(() => import('@/pages/faqPage'));
const GalleryPage = lazy(() => import('@/pages/galleryPage'));
const OurTeamPage = lazy(() => import('@/pages/ourTeamPage'));
const PortfolioPage = lazy(() => import('@/pages/portfolioPage'));
const ServicesPage = lazy(() => import('@/pages/servicesPage'));
const LoginPage = lazy(() => import('@/pages/loginPage'));
const RegisterPage = lazy(() => import('@/pages/registerPage'));

export function AppRoutes() {
  return (
    <Suspense fallback={<LoadingScreen />}> 
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Outlet />
            </MainLayout>
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/portfolio" element={<PortfolioPage />} />
          <Route path="/services/gallery" element={<GalleryPage />} />
          <Route path="/services/faq" element={<FaqPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/error" element={<ErrorPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Suspense>
  );
}
