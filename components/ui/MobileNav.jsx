"use client";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./button";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import TransitionLink from "../transitions/TransitionLink";

const links = [
  { path: "/", name: "home" },
  // { path: "/services", name: "services" },
  { path: "/resume", name: "resume" },
  { path: "/projects", name: "projects" },
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
        <div className="mt-20 mb-20 flex justify-center text-2xl">
          <Link href="/">
            <h1 className="text-3xl flex items-center font-semibold text-secondary">
              <span className="text-accent relative bottom-0 ">
                <MdKeyboardArrowLeft />
              </span>
              DevSite
              <span className="text-accent  relative bottom-0 ">
                <MdKeyboardArrowRight />
              </span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col gap-8">
          {links.map((link, index) => {
            return (
              <TransitionLink
                href={link.path}
                key={index}
                className={` w-fit ${
                  link.path === pathname
                    ? "text-accent border-b-2 font-[1000] border-accent"
                    : "text-secondary"
                } capitalize font-medium hover:text-accent transition-all delay-300`}
              >
                {/* <SheetClose> */}
                  {link.name}
                  {/* </SheetClose> */}
              </TransitionLink>
            );
          })}
        </nav>
        <div className=" flex justify-center items-center mt-20 mb-20">
          {/* <Link href="/contact">
            <Button>Hire me!</Button>
          </Link> */}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
