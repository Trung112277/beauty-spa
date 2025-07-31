import { MainLayout } from '@/components/layout/Main-layout';

export const RouteWrapper = ({ component: Component }: { component: React.ComponentType }) => (
  <Component />
);

// Layout wrapper for main routes
export const MainLayoutWrapper = ({ children }: { children: React.ReactNode }) => (
  <MainLayout>{children}</MainLayout>
); 