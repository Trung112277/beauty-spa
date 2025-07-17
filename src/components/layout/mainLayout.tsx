import { Header } from './header/header';    
import { Footer } from './footer/footer';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
