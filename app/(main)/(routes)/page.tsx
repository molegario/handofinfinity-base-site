import Image from "next/image";
import Hero from "../_components/hero";
import FeaturedPosts from "../_components/featured-posts";

export default function Home() {





  
  return (
    <>
      <div className="h-[640px] w-full flex flex-col align-middle shadow-sm justify-center">
        <Hero />
      </div>
      <FeaturedPosts />
    </>
  );
}
