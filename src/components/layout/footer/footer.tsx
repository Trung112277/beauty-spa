import { BottomFooter } from './bottomfooter';
import { MainFooter } from './mainFooter';
import { TopBarFooter } from './topBarFooter';

export function Footer() {
  return (
    <footer className='bg-gray-100'>
      <TopBarFooter />
      <MainFooter />
      <BottomFooter />
    </footer>
  );
}
