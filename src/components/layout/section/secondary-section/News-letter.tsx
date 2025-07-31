import { cn } from '@/lib/utils';
import { HeadingSecondary } from '../../../common/heading/Heading-secondary';
import { useTranslation } from 'react-i18next';
import { NotificationNewsForm } from '@/components/feature/form/Notification-news-form';

export function Newsletter({ className }: { className?: string }) {
  const { t } = useTranslation();
  return <div className={cn('flex flex-col gap-8', className)}>
    <HeadingSecondary title={t('newsletter')} />
    <NotificationNewsForm />
  </div>;
}