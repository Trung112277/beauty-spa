import { ResentPostItem } from '@/components/feature/Post-Blog/resentPostItem';
import { TitleFooter } from './titleFooter';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

export function ResentPost({ className }: { className?: string }) {
  const { t } = useTranslation();
  return (
    <div className={cn('flex flex-col gap-8', className)}>
      <TitleFooter title={t('resent_post')} />
      <ResentPostItem />
    </div>
  );
}
