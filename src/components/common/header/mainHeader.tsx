import { NavMenu } from '@/components/feature/nav-menu/navMenu';
import { Logo } from '../logo/logo';

export function MainHeader() {
  return (
    <div className='bg-white'>
      <div className="container mx-auto flex justify-between px-5 items-center h-[100px]">
        <h1>
          <a href="/">
            <Logo />
          </a>
        </h1>
        <NavMenu />
      </div>
    </div>
  );
}
