import { Routes, Route, Outlet } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LoadingScreen from '@/components/feature/loading-screen/Loading-screen';
import { MainLayout } from '@/components/layout/Main-layout';

const HomePage = lazy(() => import('@/pages/Home-page'));
const AboutUsPage = lazy(() => import('@/pages/About-us-page'));
const DashboardPage = lazy(() => import('@/pages/Dashboard-page'));
const CareerPage = lazy(() => import('@/pages/Career-page'));
const ContactUsPage = lazy(() => import('@/pages/Contact-us-page'));
const ErrorPage = lazy(() => import('@/pages/Error-page'));
const FaqPage = lazy(() => import('@/pages/Faq-page'));
const GalleryPage = lazy(() => import('@/pages/Gallery-page'));
const OurTeamPage = lazy(() => import('@/pages/Our-team-page'));
const PortfolioPage = lazy(() => import('@/pages/Portfolio-page'));
const ServicesPage = lazy(() => import('@/pages/Services-page'));
const LoginPage = lazy(() => import('@/pages/Login-page'));
const RegisterPage = lazy(() => import('@/pages/Register-page'));

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
