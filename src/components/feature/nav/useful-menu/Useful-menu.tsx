import { USEFUL_MENU_PAGES } from '@/constant/useful-menu-pages';
import { useTranslation } from 'react-i18next';
import { UsefulNavItem } from './Usefu-nav-item';

export function UsefulMenu() {
  const { t } = useTranslation();
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        {USEFUL_MENU_PAGES.map((page) => (
          <UsefulNavItem key={page.url} url={page.url} title={t(page.title)} />
        ))}
      </ul>
    </nav>
  );
}
