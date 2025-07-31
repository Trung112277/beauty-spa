import { SeparatorIcon } from "./Separator-icon";
export function SeparatorRight() {
  return (
    <div className="flex gap-3 items-center justify-left">
      <SeparatorIcon />
      <span className="w-[80px] h-[4px] bg-primary"></span>
    </div>
  );
}
