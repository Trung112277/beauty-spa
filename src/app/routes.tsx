import { Routes, Route, Outlet } from 'react-router-dom';
import { HomePage } from '@/pages/homePage';
import { AboutUsPage } from '@/pages/aboutUsPage';
import { DashboardPage } from '@/pages/dashboardPage';
import { CareerPage } from '@/pages/careerPage';
import { ContactUsPage } from '@/pages/contactUsPage';
import { ErrorPage } from '@/pages/errorPage';
import { FaqPage } from '@/pages/faqPage';
import { GalleyPage } from '@/pages/galleyPage';
import { OurTeamPage } from '@/pages/ourTeamPage';
import { PortfolioPage } from '@/pages/portfolioPage';
import { ServicesPage } from '@/pages/servicesPage';
import { MainLayout } from '@/components/layout/mainLayout';
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
        <Route path="/career" element={<CareerPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/galley" element={<GalleyPage />} />
        <Route path="/our-team" element={<OurTeamPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Route>
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}
