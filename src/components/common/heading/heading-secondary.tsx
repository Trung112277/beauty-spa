import { SeparatorRight } from '../deco/Separator-right';

export function HeadingSecondary({ title }: { title: string }) {
  return (
    <div>
      <h4 className='tracking-widest text-xl mb-2' title={title}>{title}</h4>
      <SeparatorRight />
    </div>
  );
}
