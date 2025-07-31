import { useTranslation } from 'react-i18next';
import { Logo } from '../../../common/logo/Logo';
import { TextNormal } from '../../../common/text/Text-normal';
import { HeadingSecondary } from '../../../common/heading/Heading-secondary';
import { cn } from '@/lib/utils';

export function AboutCompany({ className }: { className?: string }) {
  const { t } = useTranslation();

  return (
    <div className={cn('flex flex-col gap-8', className)}>
      <HeadingSecondary title={t('about_company')} />
      <a href="/">
        <Logo />
      </a>
      <TextNormal>
        Thewebmax ipsum dolor sit amet, interior adipiscing elit, sed diam
        nonummy nibh is euismod tincidunt ut laoreet dolore are agna aliquam
        erat. wisi enim ad minim veniam, quis tation. sit amet, consectet. ipsum
        dolor sit amet, consectetuer and item adipiscing. ipsum dolor sit.
      </TextNormal>
    </div>
  );
}
