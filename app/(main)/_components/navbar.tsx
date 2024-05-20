"use client";

// import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import Logo from "./logo";

const NavbarMain = () => {
  const { userId, isSignedIn } = useAuth();
  return (
    <div className="border-b flex flex-shrink-0 items-center shadow-sm px-5 h-[75px] fixed top-0 z-20 py-1 bg-white w-full gap-x-1">
      <div className="h-full w-[360px] relative pl-0">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="flex gap-x-2 ml-auto">
        {!isSignedIn && (
          <>
            <Link href="/posts">
              <Button size="sm" variant="outline">
                All posts
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button size="sm" variant="outline">
                Login
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button size="sm" variant="secondary">
                Sign up
              </Button>
            </Link>
          </>
        )}
        {isSignedIn && (
          <>
            <Link href="/search">
              <Button size="sm" variant="outline">
                Browse posts
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="sm" variant="outline">
                Dashboard
              </Button>
            </Link>
            <Link href="/dashboard/create">
              <Button size="sm" variant="secondary">
                Create a post
              </Button>
            </Link>
          </>
        )}
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
 
export default NavbarMain;