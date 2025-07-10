import { Mail, Phone, Facebook, Instagram, Twitter, Search, User, Eye, Lock, Menu } from 'lucide-react';

export const ICON_CONTACT = {
  email: Mail,
  phone: Phone,
} as const;

export const ICON_SOCIAL = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
} as const;

export const ICON_UI = {
  search: Search,
  user: User,
  eye: Eye,
  lock: Lock,
  menu: Menu,
} as const;
