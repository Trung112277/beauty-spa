import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export function TextNormal({ children, className }: { children: ReactNode, className?: string }) {
  return <p className={cn('text-sm leading-[20px]', className)}>{children}</p>;
}
