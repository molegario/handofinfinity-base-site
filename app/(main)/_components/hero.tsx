import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="w-[300px] h-[300px] shadow-md rounded-full overflow-hidden bg-slate-600 mx-auto mb-8">
        <Image
          src={"/images/logo_only.svg"}
          alt="Site Logo"
          width={300}
          height={300}
          className="object-cover object-top"
        />
      </div>
      <h1 className="text-center mb-5 text-4xl">
        This site is proof that I have lived.
      </h1>
      <h3 className="text-center mb-8 text-xl">Hosted by TheCommonNonsense</h3>
      <p className="text-center">
        <Link href="/posts">
          <Button size="sm" variant="secondary" className="bg-[#EF5B2A] text-white border-white hover:bg-slate-600 hover:text-white border hover:border-white shadow-none inset-0 outline-none">
            Browse all posts
          </Button>
        </Link>
      </p>
    </section>
  );
};

export default Hero;
