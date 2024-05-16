import { db } from "@/lib/db";
import PostsGrid from "./posts-grid/posts-grid";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Post } from "@prisma/client";

interface FeaturedPostsProps {
  posts: Post[];
};

const FeaturedPosts = async ({posts=[]}: FeaturedPostsProps) => {

  return (
    <section className="w-full flex flex-col items-center bg-slate-600">
      <div className="w-[90%] max-w-[80rem] m-2 mb-[8rem]">
        <h1 className="text-center text-2xl m-8 text-[#EF5B2A] font-semibold">
          Featured Posts
        </h1>
        <PostsGrid posts={posts} />
      </div>
    </section>
  );
}
 
export default FeaturedPosts;