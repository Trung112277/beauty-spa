import { cn } from '@/lib/utils';
import { TitleFooter } from './Title-footer';
import { useTranslation } from 'react-i18next';
import { NotificationNewsForm } from '@/components/feature/form/Notification-news-form';

export function Newsletter({ className }: { className?: string }) {
  const { t } = useTranslation();
  return <div className={cn('flex flex-col gap-8', className)}>
    <TitleFooter title={t('newsletter')} />
    <NotificationNewsForm />
  </div>;
}