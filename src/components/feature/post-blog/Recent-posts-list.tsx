import { RESENT_POST_ITEMS } from "@/constant/recent-post-items";
import { PostList } from "./Post-list";

export function RecentPostsList() {
    const recentPosts = RESENT_POST_ITEMS;
  
    return <PostList posts={recentPosts} />
  }