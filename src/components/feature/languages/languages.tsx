import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { LANGUAGES } from '@/constant/languages';
import { useState } from 'react';

export function Languages() {
  const [value, setValue] = useState<keyof typeof LANGUAGES>('vietnamese');
  return (
    <Select
      value={value}
      onValueChange={(v) => setValue(v as keyof typeof LANGUAGES)}
    >
      <SelectTrigger className="border-none font-bold bg-secondary text-white gap-1 hover:brightness-90">
        <SelectValue placeholder={LANGUAGES[value]} />
      </SelectTrigger>
      <SelectContent
        className="z-50 bg-secondary hover:text-primary font-bold"
        style={{ transition: 'color 300ms, background-color 300ms, border-color 300ms, transform 0s' }}
      >
        {Object.entries(LANGUAGES).map(([key, label]) => (
          <SelectItem key={key} value={key}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
