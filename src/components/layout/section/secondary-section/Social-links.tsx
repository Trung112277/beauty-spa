import { cn } from '@/lib/utils';
import { HeadingSecondary } from '../../../common/heading/heading-secondary';
import { SocialIcon } from '@/components/common/icon/Social-icon';
import { useTranslation } from 'react-i18next';

export function SocialLinks({ className }: { className?: string }) {
  const { t } = useTranslation();
  return (
    <div className={cn('flex flex-col gap-8', className)}>
      <HeadingSecondary title={t('social_links')} />
      <SocialIcon />
    </div>
  );
}
