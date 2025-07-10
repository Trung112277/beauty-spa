import { Header } from '../common/header/heeder';
import { Footer } from '../common/footer/footer';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="container mx-auto px-5">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
