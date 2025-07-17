import { SeparatorIcon } from './separatorIcon';

export function SeparatorOuter() {
  return (
    <div className="flex gap-4 items-center justify-center">
      <span className="w-[80px] h-[3px] bg-primary"></span>
      <SeparatorIcon />
      <span className="w-[80px] h-[3px] bg-primary"></span>
    </div>
  );
}
