import { ICON_CONTACT } from './icon';

export const CONTACT_INFO = [
  {
    type: 'email',
    value: 'mail@thewebmax.com',
    href: 'mailto:mail@thewebmax.com',
    icon: ICON_CONTACT.email,
  },
  {
    type: 'phone',
    value: '(654) 321-7654',
    href: 'tel:(654)321-7654',
    icon: ICON_CONTACT.phone,
  },
] as const; 