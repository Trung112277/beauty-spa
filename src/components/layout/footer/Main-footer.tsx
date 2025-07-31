import { AboutCompany } from './About-company';
import { Newsletter } from './News-letter';
import { ResentPost } from '../../feature/post-blog/Recent-post';
import { SocialLinks } from './Social-links';
import { UsefulLinks } from './Useful-links';

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
