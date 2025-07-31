import { RESENT_POST_ITEMS } from "@/constant/resentPostItems";
import { PostList } from "./Post-list";

export function RecentPosts() {
    const recentPosts = RESENT_POST_ITEMS;
  
    return <PostList posts={recentPosts} />
  }