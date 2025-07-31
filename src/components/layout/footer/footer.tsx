import { BottomFooter } from './Bottom-footer';
import { MainFooter } from './Main-footer';
import { TopBarFooter } from './Top-bar-footer';

export function Footer() {
  return (
    <footer className='bg-gray-100'>
      <TopBarFooter />
      <MainFooter />
      <BottomFooter />
    </footer>
  );
}
