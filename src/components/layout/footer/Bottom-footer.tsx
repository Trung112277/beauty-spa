import { CopyRight } from './Copy-right';
import { FooterStrip } from './Footer-strip';
import { CopyRightNav } from '@/components/feature/nav/copyright-menu/Copyright-nav';
export function BottomFooter() {
  return (
    <div>
      <FooterStrip />
      <div className="container mx-auto px-5 py-6 flex justify-between items-center">
        <div>
          <CopyRight Company="your company" year={2025} />
        </div>
        <div>
          <CopyRightNav />
        </div>
      </div>
    </div>
  );
}
