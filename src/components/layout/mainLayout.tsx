import { Header } from './header';
import { Footer } from './footer';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
