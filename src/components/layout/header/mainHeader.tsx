import { NavMenu } from '@/components/feature/nav-menu/navMenu';
import { Logo } from '../../common/logo/logo';
import { LoginUser } from '@/components/feature/login-user/loginUser';

export function MainHeader() {
  return (
    <div className="bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between px-5 items-center h-[100px]">
        <h1>
          <a href="/">
            <Logo />
          </a>
        </h1>
        <NavMenu />
        <LoginUser />
      </div>
    </div>
  );
}
