import { Link } from 'react-router-dom';

export type MenuItemProps = {
  url: string;
  title: string;
};

export function UsefulMenuItem({ url, title }: MenuItemProps) {
  return (
    <Link to={url} className="hover:text-primary">
      {title}
    </Link>
  );
}
