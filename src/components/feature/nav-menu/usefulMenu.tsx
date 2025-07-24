import { USEFUL_MENU_PAGES } from '@/constant/usefulMenuPages';
import { MenuListItem } from './menuListItem';
import { useTranslation } from 'react-i18next';

export function UsefulMenu() {
  const { t } = useTranslation();
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        {USEFUL_MENU_PAGES.map((page) => (
          <MenuListItem key={page.url} url={page.url} title={t(page.title)} />
        ))}
      </ul>
    </nav>
  );
}
