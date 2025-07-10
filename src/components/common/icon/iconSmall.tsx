import { cn } from '@/lib/utils';

export function IconSmall({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("p-1 bg-black/20 block", className) }>{children}</span>;
}
