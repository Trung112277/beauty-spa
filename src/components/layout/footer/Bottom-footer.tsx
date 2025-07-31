import { FullScreenStrip } from '@/components/common/deco/Full-screen-strip';
import { Copyright } from './Copyright';
import { CopyrightNav } from '@/components/feature/nav/copyright-menu/Copyright-nav';
export function BottomFooter() {
  return (
    <div>
      <FullScreenStrip />
      <div className="container mx-auto px-5 py-6 flex justify-between items-center">
        <div>
          <Copyright Company="your company" year={2025} />
        </div>
        <div>
          <CopyrightNav />
        </div>
      </div>
    </div>
  );
}
