"use client";

import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./button";

const links = [
  { path: "/", name: "home" },
  // { path: "/services", name: "services" },
  { path: "/resume", name: "resume" },
  { path: "/projects", name: "projects"},
  { path: "/contact", name: "contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className=" flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className=" flex flex-col">
        <div className="mt-20 mb-20 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
            DevSite<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={` w-fit ${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } capitalize font-medium hover:text-accent transition-all delay-300`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className=" flex justify-center items-center mt-20 mb-20">
          <Link href="/contact">
            <Button>Hire me!</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
