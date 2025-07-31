import { Link } from 'react-router-dom';

export type MenuItemProps = {
  url: string;
  title: string;
};

export function MenuItem({ url, title }: MenuItemProps) {
  return (
    <Link to={url} title={title} className="hover:text-primary">
      {title}
    </Link>
  );
}
