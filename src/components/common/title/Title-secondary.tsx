import { SeparatorRight } from '../deco/Separator-right';

export function TitleSecondary({ title }: { title: string }) {
  return (
    <div>
      <h4 className='tracking-widest text-xl mb-2' title={title}>{title}</h4>
      <SeparatorRight />
    </div>
  );
}
