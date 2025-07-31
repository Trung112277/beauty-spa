import { MenuItemProps, MenuItem } from '../Menu-item';

export function CopyRightNavItem({ url, title }: MenuItemProps) {
  return (
    <li className="flex items-center gap-2">
      <MenuItem url={url} title={title} />
    </li>
  );
}
