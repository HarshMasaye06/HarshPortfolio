"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TransitionLink from "../transitions/TransitionLink";

const links = [
  { path: "/", name: "home" },
  // { path: "/services", name: "services" },
  { path: "/resume", name: "resume" },
  { path: "/projects", name: "projects" },
  { path: "/contact", name: "contact" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <TransitionLink
            href={link.path}
            key={index}
            className={`${
              link.path === pathname
                ? "text-accent border-b-2 border-accent"
                : "text-secondary"
            }  capitalize font-medium hover:text-accent transition-all `}
          >
            {link.name}
          </TransitionLink>
        );
      })}
    </nav>
  );
};

export default Nav;
