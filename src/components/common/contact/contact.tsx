import { IconSmall } from '../icon/iconSmall';
import { ICONS } from '@/constant/icon';

export function Contact() {
  return (
    <ul className="flex gap-3 text-[12px]">
      <li>
        <a href="mailto:mail@thewebmax.com" className="flex items-center gap-1">
          <IconSmall>
            <ICONS.email size={15} />
          </IconSmall>
          mail@thewebmax.com
        </a>
      </li>
      <li>
        <a href="tel:(654)321-7654" className="flex items-center gap-1">
          <IconSmall>
            <ICONS.phone size={15} />
          </IconSmall>
          (654) 321-7654
        </a>
      </li>
    </ul>
  );
}
