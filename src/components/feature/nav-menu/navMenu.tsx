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

// Type cho menu item
interface NavMenuItem {
  title: string;
  to: string;
  children?: NavMenuItem[];
}

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList >
        {[...(NAV_MENU_ITEMS as unknown as NavMenuItem[])].map((item) => (
          <NavigationMenuItem key={item.to}>
            {item.children?.length ? (
              <>
                <NavigationMenuTrigger className='bg-transparent py-1 px-2 text-base'>
                  <Link
                    to={item.to}
                    className="block uppercase font-bold hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="z-50 bg-white min-w-[250px] shadow-lg border">
                  <ul>
                    {item.children.map((child: NavMenuItem) => (
                      <li key={child.to} className='border-b hover:bg-secondary py-2'>
                        <NavigationMenuLink asChild>
                          <Link
                            to={child.to}
                            className="block py-1 px-2 font-bold hover:text-primary"
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
                  className="block py-1 px-2 uppercase font-bold hover:text-primary"
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
