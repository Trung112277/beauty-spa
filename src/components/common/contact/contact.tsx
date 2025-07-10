import { IconSmall } from '../icon/iconSmall';
import { CONTACT_INFO } from '@/constant/contact';

export function Contact() {
  return (
    <ul className="flex gap-3 text-[12px]">
      {CONTACT_INFO.map((item) => (
        <li key={item.type}>
          <a href={item.href} className="flex items-center gap-1">
            <IconSmall>
              <item.icon size={15} />
            </IconSmall>
            {item.value}
          </a>
        </li>
      ))}
    </ul>
  );
}
