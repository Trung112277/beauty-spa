import { MainMenuNav } from '@/components/feature/nav/main-menu/main-menu-mav';
import { Logo } from '../../common/logo/Logo';
import { LoginUser } from '@/components/feature/user/login-user/Login-user';

export function MainHeader() {
  return (
    <div className="bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between px-5 items-center h-[100px]">
        <h1>
          <a href="/">
            <Logo />
          </a>
        </h1>
        <MainMenuNav />
        <LoginUser />
      </div>
    </div>
  );
}
