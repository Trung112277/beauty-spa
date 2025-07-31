import { SeparatorRight } from '../../common/deco/Separator-right';

export function TitleFooter({ title }: { title: string }) {
  return (
    <div>
      <h4 className='tracking-widest text-xl mb-2'>{title}</h4>
      <SeparatorRight />
    </div>
  );
}
