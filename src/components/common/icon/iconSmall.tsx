import { cn } from '@/lib/utils';

export function IconSmall({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("p-1 bg-black/10 block rounded-md hover:bg-secondary", className) }>{children}</span>;
}
