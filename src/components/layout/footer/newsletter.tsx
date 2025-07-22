import { cn } from '@/lib/utils';
import { TitleFooter } from './titleFooter';
import { FormFooter } from '@/components/feature/form/formFooter';

export function Newsletter({ className }: { className?: string }) {
  return <div className={cn('flex flex-col gap-8', className)}>
    <TitleFooter title="Newsletter" />
    <FormFooter />
  </div>;
}