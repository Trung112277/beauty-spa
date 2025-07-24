import { COPY_RIGHT_NAV } from '@/constant/copyRightNav';
import { CopyRightNavItem } from './CopyRightNavItem';

export function CopyRightNav() {
  return (
    <nav>
      <ul className="flex gap-2 items-center">
        {COPY_RIGHT_NAV.map((page, idx) => (
          <>
            <CopyRightNavItem key={page.url} url={page.url} title={page.title} />
            {idx < COPY_RIGHT_NAV.length - 1 && <span>/</span>}
          </>
        ))}
      </ul>
    </nav>
  );
}
