// import { db } from "@/lib/db";
import PostsGrid from "./posts-grid/posts-grid";
// import { auth } from "@clerk/nextjs";
// import { redirect } from "next/navigation";
import { Category, Post } from "@prisma/client";
import Categories from "../_components/categories";
import SearchInput from "../_components/search-input";

interface AllPostsProps {
  posts: Post[];
  categories: Category[];
};

const AllPosts = async ({posts=[], categories=[]}: AllPostsProps) => {

  return (
    <section className="w-full flex flex-col items-center bg-slate-600">
      <div className="w-full flex flex-row justify-between p-4 fixed z-50">
        <Categories categories={categories} />
        <SearchInput />
      </div>
      <div className="w-[90%] max-w-[80rem] m-2 mb-[8rem]">
        <h1 className="text-center text-2xl m-8 text-[#EF5B2A] font-semibold">
          All Posts
        </h1>
        <PostsGrid posts={posts} />
      </div>
    </section>
  );
}
 
export default AllPosts;