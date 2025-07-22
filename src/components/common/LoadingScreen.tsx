import { Loader2 } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <Loader2 className="w-10 h-10 animate-spin text-primary" />
      <span className="ml-3 text-lg font-medium text-primary"></span>
    </div>
  );
} 