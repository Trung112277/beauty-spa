import { USEFUL_MENU_PAGES } from '@/constant/usefulMenuPages';
import { MenuListItem } from './menuListItem';

export function UsefulMenu() {
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        {USEFUL_MENU_PAGES.map((page) => (
          <MenuListItem key={page.url} url={page.url} title={page.title} />
        ))}
      </ul>
    </nav>
  );
}
