import { db } from "@/lib/db";
import AllPosts from "../../_components/all-posts";
import { getPosts } from "@/actions/get-posts";
import PostsGrid from "../../_components/posts-grid/posts-grid";
import Categories from "../../_components/categories";
import SearchInput from "../../_components/search-input";

interface AllPostsPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
};

const AllPostsPage = async ({ searchParams }: AllPostsPageProps) => {

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const posts = await getPosts({
    userId: "",
    ...searchParams,
  });


  return (
    <section className="w-full h-full flex flex-col items-center bg-slate-600">
      <div className="w-full flex flex-row justify-between p-4 fixed z-50">
        <Categories categories={categories} />
        <SearchInput />
      </div>
      <div className="w-[90%] max-w-[80rem] m-2 mb-[8rem] py-[4rem]">
        <h1 className="text-center text-2xl m-8 text-[#EF5B2A] font-semibold">
          All posts
        </h1>
        <PostsGrid posts={posts} />
      </div>
    </section>
  );
}
 
export default AllPostsPage;