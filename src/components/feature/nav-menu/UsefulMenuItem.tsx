import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
export interface UsefulMenuItemProps {
  url: string;
  title: string;
}

export function UsefulMenuItem({ url, title }: UsefulMenuItemProps) {
  return (
    <li className="border-b border-dashed border-primary flex items-center gap-2 py-3">
      <ChevronRight size={15} />{' '}
      <Link to={url} className="hover:text-primary">
        {title}
      </Link>
    </li>
  );
}
