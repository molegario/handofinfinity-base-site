import Image from "next/image";

const Logo = () => {
  return (
    <Image
      className="w-auto"
      height={130}
      width={130}
      alt="logo"
      src="/images/logo_only.svg"
    />
  );
};

export default Logo;
