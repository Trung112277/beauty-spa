import { ICONS } from '@/constant/icon';
import { IconSmall } from './iconSmall';

export function SocialIcon({ className }: { className?: string }) {
  const socials = ['facebook', 'instagram', 'twitter'] as const;
  return (
    <ul className={className ? className : 'flex gap-3 text-[12px]'}>
      {socials.map((key) => {
        const Icon = ICONS[key];
        return (
          <li>
            <a href="/">
            <IconSmall key={key}>
              <Icon size={15} />
            </IconSmall>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
