import { ResentPostDay } from './Post-day';
import { ResentPostInfo } from './Post-info';

export function PostList({ posts }: { posts: any[] }) {
  return (
    <div className="flex flex-col gap-6">
      {posts.map((item, idx) => (
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