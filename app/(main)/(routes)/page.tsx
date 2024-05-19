// import Image from "next/image";
import Hero from "../_components/hero";
import FeaturedPosts from "../_components/featured-posts";
// import { auth } from "@clerk/nextjs";
// import { redirect } from "next/navigation";
import { db } from "@/lib/db";

export default async function Home() {

  const posts = await db.post.findMany({
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <div className="h-[640px] w-full flex flex-col align-middle shadow-sm justify-center">
        <Hero />
      </div>
      <FeaturedPosts posts={posts} />
    </>
  );
}
