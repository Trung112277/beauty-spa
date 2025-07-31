import { COPY_RIGHT_NAV } from '@/constant/copyright-nav';
import { CopyRightNavItem } from './Copyright-nav-item';
import { useTranslation } from 'react-i18next';
import React from 'react';

export function CopyRightNav() {
  const { t } = useTranslation();

  return (
    <nav>
      <ul className="flex gap-2 items-center">
        {COPY_RIGHT_NAV.map((page, idx) => (
          <React.Fragment key={page.url}>
            <CopyRightNavItem url={page.url} title={t(page.title)} />
            {idx < COPY_RIGHT_NAV.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}
