import { AboutCompany } from './aboutCompany';
import { ResentPost } from './resentPost';
import { UsefulLinks } from './usefulLinks';

export function MainFooter() {
  return (
    <div className="container mx-auto px-5 py-12 grid grid-cols-4">
      <AboutCompany className="pr-3" />
      <ResentPost className="px-3" />
      <UsefulLinks className="px-3" />
    </div>
  );
}
