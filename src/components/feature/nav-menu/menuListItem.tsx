import { ChevronRight } from 'lucide-react';
import { MenuItemProps, UsefulMenuItem } from './UsefulMenuItem';

export function MenuListItem({ url, title }: MenuItemProps) {
  return (
    <li className="border-b border-dashed border-primary flex items-center gap-2 py-3">
      <ChevronRight size={15} /> <UsefulMenuItem url={url} title={title} />
    </li>
  );
}
