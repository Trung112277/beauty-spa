import { cn } from '@/lib/utils';
import { TitleFooter } from './titleFooter';
import { FormFooter } from '@/components/feature/form/formFooter';
import { useTranslation } from 'react-i18next';

export function Newsletter({ className }: { className?: string }) {
  const { t } = useTranslation();
  return <div className={cn('flex flex-col gap-8', className)}>
    <TitleFooter title={t('newsletter')} />
    <FormFooter />
  </div>;
}