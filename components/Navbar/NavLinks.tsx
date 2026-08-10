"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
  {
    label: "List your Property",
    href: "/list-your-property",
  },
  {
    label: "Locations",
    href: "/locations",
  },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-10 xl:gap-12">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`
              whitespace-nowrap text-[17px] font-normal transition-colors duration-200 
              ${isActive ? "text-[#f26b45]" : "text-black"}
            `}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
