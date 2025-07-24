import { ChevronRight } from 'lucide-react';
import { MenuItemProps, MenuItem } from '../menuItem';

export function UsefulNavItem({ url, title }: MenuItemProps) {
  return (
    <li className="border-b border-dashed border-primary flex items-center gap-2 py-3">
      <ChevronRight size={15} /> <MenuItem url={url} title={title} />
    </li>
  );
}
