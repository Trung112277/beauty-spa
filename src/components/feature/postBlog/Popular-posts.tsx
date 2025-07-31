import { PostList } from "./Post-list";
import { POPULAR_POST_ITEMS } from "@/constant/Popular-posts";

export function PopularPosts() {
    const popularPosts = POPULAR_POST_ITEMS;
  
    return <PostList posts={popularPosts} />
  }