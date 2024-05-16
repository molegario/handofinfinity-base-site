import { ReactNode } from "react";
import NavbarMain from "./_components/navbar";
import Footer from "./_components/footer";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full flex flex-col mt-[75px]">
      <NavbarMain />
      <div className="flex-1 bg-[#EF5B2A]">
        <main className="pt-0 h-full pl-0 pr-0 flex flex-col justify-center items-center">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
