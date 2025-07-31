import { RecentPostsList } from '@/components/feature/post-blog/Recent-posts-list';
import { TitleSecondary } from '../../../common/title/Title-secondary';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

export function ResentPost({ className }: { className?: string }) {
  const { t } = useTranslation();
  return (
    <div className={cn('flex flex-col gap-8', className)}>
      <TitleSecondary title={t('resent_post')} />
      <RecentPostsList />
    </div>
  );
}
