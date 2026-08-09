import Link from "next/link";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import CurrencySelect from "./CurrencySelect";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="relative w-full z-50 border-t border-black bg-white">
      <nav className="mx-auto flex h-26.5 max-w-[1920px] items-center px-6 sm:px-8 lg:px-12 xl:px-14">
        {/* Logo */}
        <Logo />

        {/* Desktop navigation */}
        <div className="ml-auto hidden items-center gap-8 lg:flex xl:gap-3">
          <NavLinks />

          <CurrencySelect />

          <Link
            href="/login"
            className="whitespace-nowrap text-[17px] text-black transition-colors duration-200 hover:text-[#f26b45]"
          >
            Log In
          </Link>

          <Link
            href="/signup"
            className="whitespace-nowrap border border-black px-7 py-3 text-[17px] text-black transition-colors duration-200 hover:border-[#f26b45] hover:text-[#f26b45]"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile navigation */}
        <div className="ml-auto lg:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;