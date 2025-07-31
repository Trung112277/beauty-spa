import { Languages } from '@/components/feature/languages/languages';
import { Contact } from '../../common/contact/Contact';
import { SocialIcon } from '../../common/icon/Social-icon';

export function TopBarHeader() {
  return (
    <div className="bg-primary">
      <div className="container m-auto px-5 py-3 text-black flex justify-between items-center">
        <Contact />
        <div className="flex items-center gap-4">
          <SocialIcon />
          <Languages />
        </div>
      </div>
    </div>
  );
}
