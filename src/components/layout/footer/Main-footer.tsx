import { AboutCompany } from '../section/secondary-section/About-company';
import { Newsletter } from '../section/secondary-section/News-letter';
import { ResentPost } from '../section/secondary-section/Recent-post';
import { SocialLinks } from '../section/secondary-section/Social-links';
import { UsefulLinks } from '../section/secondary-section/Useful-links';

export function MainFooter() {
  return (
    <div className="container mx-auto px-5 py-12 grid grid-cols-4">
      <AboutCompany className="pr-3" />
      <ResentPost className="px-3" />
      <UsefulLinks className="px-3" />
      <div className="pl-3 flex flex-col gap-10">
        <Newsletter />
        <SocialLinks />
      </div>
    </div>
  );
}
