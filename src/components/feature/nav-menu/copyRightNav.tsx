import { COPY_RIGHT_NAV } from '@/constant/copyRightNav';
import { CopyRightNavItem } from './CopyRightNavItem';
import React from 'react';

export function CopyRightNav() {
  return (
    <nav>
      <ul className="flex gap-2 items-center">
        {COPY_RIGHT_NAV.map((page, idx) => (
          <React.Fragment key={page.url}>
            <CopyRightNavItem url={page.url} title={page.title} />
            {idx < COPY_RIGHT_NAV.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}
