import { MessageCircle, User } from 'lucide-react';
import { ResentPostInfoProps } from '@/components/types/resentPostInfo';

export function ResentPostInfo({
  url,
  title,
  author,
  commentCount,
}: ResentPostInfoProps) {
  return (
    <div className="w-full">
      <h2 className="mb-3 font-bold text-sm">
        <a href={url}>{title}</a>
      </h2>
      <div className="flex gap-2 items-center text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <User size={20} /> By {author}
        </span>
        <span>/</span>
        <span className="flex items-center gap-1">
          <MessageCircle size={20} /> {commentCount}
        </span>
      </div>
    </div>
  );
}
