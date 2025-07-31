import { Loader2 } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary">
      <Loader2 className="w-[75px] h-[75px] animate-spin text-secondary" />
    </div>
  );
}
