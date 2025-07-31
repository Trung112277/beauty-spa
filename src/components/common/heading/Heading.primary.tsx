import { SeparatorOuter } from "../deco/Separator-outer";

export function HeadingPrimary({ title }: { title: string }) {
  const words = title.split(' ');
  const firstWord = words[0];
  const remainingWords = words.slice(1).join(' ');

  return (
    <div>
      <h2 className='tracking-widest text-center text-[42px] mb-3 capitalize' title={title}>
        <span className="text-primary">{firstWord}</span>
        {remainingWords && <span className="text-current"> {remainingWords}</span>}
      </h2>
      <SeparatorOuter />
    </div>
  );
}
