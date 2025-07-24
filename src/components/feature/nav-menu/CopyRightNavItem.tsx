import { UsefulMenuItem, MenuItemProps } from './UsefulMenuItem';

export function CopyRightNavItem({ url, title }: MenuItemProps) {
  return (
    <li className="flex items-center gap-2">
      <UsefulMenuItem url={url} title={title} />
    </li>
  );
}
