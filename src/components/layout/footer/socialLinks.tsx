import { cn } from '@/lib/utils';
import { TitleFooter } from './titleFooter';
import { SocialIcon } from '@/components/common/icon/socialIcon';
import { useTranslation } from 'react-i18next';

export function SocialLinks({ className }: { className?: string }) {
  const { t } = useTranslation();
  return (
    <div className={cn('flex flex-col gap-8', className)}>
      <TitleFooter title={t('social_links')} />
      <SocialIcon />
    </div>
  );
}
