import { cn } from '@/lib/utils';
import { TitleFooter } from './titleFooter';
import { SocialIcon } from '@/components/common/icon/socialIcon';

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col gap-8', className)}>
      <TitleFooter title="Social Links" />
      <SocialIcon />
    </div>
  );
}
