import { Contact } from '../contact/contact';
import { SocialIcon } from '../icon/socialIcon';

export function TopBar() {
  return (
    <div className="bg-primary">
      <div className="container m-auto px-5 py-3 text-black flex justify-between items-center">
        <Contact />
        <SocialIcon />
      </div>
    </div>
  );
}
