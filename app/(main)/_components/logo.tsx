import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Image
        className="w-auto hidden md:block"
        fill
        alt="logo"
        src="/images/postarama-colorized.svg"
      />
      <Image
        className="w-auto block md:hidden max-w-[74px]"
        fill
        alt="logo"
        src="/images/logo_only.svg"
      />
    </>
  );
};

export default Logo;
