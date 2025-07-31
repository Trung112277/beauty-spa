import { ICON_SOCIAL } from '@/constant/icon-social-contact';
import { IconSmall } from './Icon-small';
import { Link } from 'react-router-dom';

export function SocialIcon({ className }: { className?: string }) {
  const socials = Object.keys(ICON_SOCIAL) as Array<keyof typeof ICON_SOCIAL>;
  return (
    <nav>
      <ul className={className ? className : 'flex gap-3 text-[12px]'}>
        {socials.map((key) => {
          const Icon = ICON_SOCIAL[key];
          return (
            <li key={key}>
              <Link to="/" target="_blank">
                <IconSmall>
                  <Icon size={15} />
                </IconSmall>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
