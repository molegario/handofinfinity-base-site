import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="w-[300px] h-[300px] shadow-md rounded-full overflow-hidden bg-slate-600 mx-auto mb-5">
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
      <h3 className="text-center mb-5 text-xl">Hosted by TheCommonNonsense</h3>
      <p className="text-center mb-5 text-sm">
        Requests for content submission to follow.
      </p>
    </section>
  );
};

export default Hero;
