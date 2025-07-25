import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';
import { NAV_MENU_ITEMS } from '@/constant/navMenu';
import { NavMenuItem } from '@/types/navMenu';
import { useTranslation } from 'react-i18next';

export function NavMenu() {
  const { t } = useTranslation();
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {[...(NAV_MENU_ITEMS as unknown as NavMenuItem[])].map((item) => (
          <NavigationMenuItem
            key={item.to}
            className={item.children?.length ? 'relative' : undefined}
          >
            {item.children?.length ? (
              <>
                <NavigationMenuTrigger className="bg-transparent py-1 px-2 text-base">
                  <Link
                    to={item.to}
                    className="uppercase font-bold hover:text-primary"
                  >
                    {t(item.title)}
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-0 top-full z-50 bg-white min-w-[250px] shadow-lg border">
                  <ul>
                    {item.children.map((child: NavMenuItem) => (
                      <li
                        key={child.to}
                        className="border-b hover:bg-secondary"
                      >
                        <NavigationMenuLink asChild>
                          <Link
                            to={child.to}
                            className="block font-bold hover:text-primary p-2"
                          >
                            {t(child.title)}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  to={item.to}
                  className="py-1 px-2 uppercase font-bold hover:text-primary"
                >
                  {t(item.title)}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
