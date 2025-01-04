import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./button";
import MobileNav from "./MobileNav";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import TransitionLink from "../transitions/TransitionLink";


const Header = () => {
  return (
    <header className=" py-8 xl:py-12 ">
      <div className=" container h-full mx-auto flex justify-between items-center">
        {/* logo */}
        <TransitionLink href="/">
          <h1 className="text-4xl flex items-center font-semibold text-secondary">
            <span className="text-accent ">
              <MdKeyboardArrowLeft />
            </span>
            DevSite
            <span className="text-accent ">
              <MdKeyboardArrowRight />
            </span>
          </h1>
        </TransitionLink>

        {/* nav */}
        <div className=" hidden lg:flex xl:flex items-center gap-8">
          <Nav />
          {/* <Link href="/contact">
            <Button>Hire me!</Button>
          </Link> */}
        </div>

        {/* mobile nav */}
        <div className="lg:hidden xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
