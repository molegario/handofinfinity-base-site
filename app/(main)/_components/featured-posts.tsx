import { db } from "@/lib/db";
import PostsGrid from "./posts-grid/posts-grid";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const FeaturedPosts = async () => {

  const {
    userId
  } = auth();

  if (!userId) {
    return redirect("/");
  }

  const posts = await db.post.findMany({
    where: {
      userId: userId,
    },
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <section className="w-full flex flex-col items-center bg-slate-600">
      <div className="w-[90%] max-w-[80rem] m-2 mb-[10rem]">
        <h1 className="text-center text-2xl m-8 text-[#EF5B2A]">
          Featured Posts
        </h1>
        <PostsGrid posts={posts} />
      </div>
    </section>
  );
}
 
export default FeaturedPosts;