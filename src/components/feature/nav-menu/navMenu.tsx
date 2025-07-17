import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';
import { NAV_MENU_ITEMS } from '@/constant/nav-menu';
import { NavMenuItem } from '@/components/types/navMenu';

export function NavMenu() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {[...(NAV_MENU_ITEMS as unknown as NavMenuItem[])].map((item) => (
          <NavigationMenuItem key={item.to} className="relative">
            {item.children?.length ? (
              <>
                <NavigationMenuTrigger className="bg-transparent py-1 px-2 text-base">
                  <Link
                    to={item.to}
                    className="uppercase font-bold hover:text-primary"
                  >
                    {item.title}
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
                            {child.title}
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
                  {item.title}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}