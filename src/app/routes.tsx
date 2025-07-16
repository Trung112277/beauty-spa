import { Routes, Route, Outlet } from 'react-router-dom';
import { HomePage } from '@/pages/homePage';
import { AboutUsPage } from '@/pages/aboutUsPage';
import { DashboardPage } from '@/pages/dashboardPage';
import { CareerPage } from '@/pages/careerPage';
import { ContactUsPage } from '@/pages/contactUsPage';
import { ErrorPage } from '@/pages/errorPage';
import { FaqPage } from '@/pages/faqPage';
import { GalleryPage } from '@/pages/galleryPage';
import { OurTeamPage } from '@/pages/ourTeamPage';
import { PortfolioPage } from '@/pages/portfolioPage';
import { ServicesPage } from '@/pages/servicesPage';
import { MainLayout } from '@/components/layout/mainLayout';
import { LoginPage } from '@/pages/loginPage';
import { RegisterPage } from '@/pages/registerPage';
export function AppRoutes() {
  return (
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
  );
}
