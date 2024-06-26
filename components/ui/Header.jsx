import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="  py-8 xl:py-12 text-white">
      <div className=" container h-full mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Logo<span className="text-accent">.</span>
          </h1>
        </Link>

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
