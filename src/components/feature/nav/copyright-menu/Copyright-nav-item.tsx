import { MenuItemProps, MenuItem } from '../Menu-item';

export function CopyrightNavItem({ url, title }: MenuItemProps) {
  return (
    <li className="flex items-center gap-2">
      <MenuItem url={url} title={title} />
    </li>
  );
}
