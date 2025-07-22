import { ResentPostDay } from './resentPostDay';
import { ResentPostInfo } from './resentPostInfo';
import { RESENT_POST_ITEMS } from '@/constant/resentPostItems';

export function ResentPostItem() {
  return (
    <div className="flex flex-col gap-6">
      {RESENT_POST_ITEMS.map((item, idx) => (
        <article key={idx} className="flex gap-5 items-center">
          <ResentPostDay day={item.day} month={item.month} year={item.year} />
          <ResentPostInfo
            url={item.url}
            title={item.title}
            author={item.author}
            commentCount={item.commentCount}
          />
        </article>
      ))}
    </div>
  );
}
