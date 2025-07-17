import { ResentPostDayProps } from "@/components/types/resentPostDay";
import { MONTHS } from "@/constant/months";

export function ResentPostDay({ day, month, year }: ResentPostDayProps) {
  const monthNumber = typeof month === "number" ? month : parseInt(month, 10);
  const monthText = MONTHS[monthNumber - 1] || "";

  return (
    <div className="bg-black text-white text-center min-w-[70px] py-3">
      <time dateTime={`${year}-${monthNumber.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`} className="flex flex-col uppercase">
        <strong className="text-2xl">{day}</strong>
        {monthText}
      </time>
    </div>
  );
}