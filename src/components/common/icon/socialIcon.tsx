import { ICON_SOCIAL } from '@/constant/icon';
import { IconSmall } from './iconSmall';

export function SocialIcon({ className }: { className?: string }) {
  const socials = Object.keys(ICON_SOCIAL) as Array<keyof typeof ICON_SOCIAL>;
  return (
    <ul className={className ? className : 'flex gap-3 text-[12px]'}>
      {socials.map((key) => {
        const Icon = ICON_SOCIAL[key];
        return (
          <li key={key}>
            <a href="/">
              <IconSmall>
                <Icon size={15} />
              </IconSmall>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
