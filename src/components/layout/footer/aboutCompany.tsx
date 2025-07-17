import { Logo } from '../../common/logo/logo';
import { TextNormal } from '../../common/text/textNormal';
import { TitleFooter } from './titleFooter';
import { cn } from '@/lib/utils';

export function AboutCompany({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col gap-8', className)}>
      <TitleFooter title="About Company" />
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
