import { ResentPostItem } from '@/components/feature/Post-Blog/resentPostItem';
import { TitleFooter } from './titleFooter';
import { cn } from '@/lib/utils';

export function ResentPost({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col gap-8', className)}>
      <TitleFooter title="Resent Post" />
      <ResentPostItem />
    </div>
  );
}
