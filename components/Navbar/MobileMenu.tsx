"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const mobileLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "List your Property", href: "/list-your-property" },
  { label: "Locations", href: "/locations" },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
        {/* Mobile Header Controls */}
        <div className="flex items-center gap-4">
        
            {/* Currency */}
            <select
                defaultValue="NGN"
                aria-label="Select currency"
                className="
                h-10 
                cursor-pointer 
                border 
                border-[#eadfd9] 
                bg-white 
                px-2 
                text-sm 
                text-black 
                outline-none"
            >
                <option value="NGN">NGN</option>
                <option value="USD">USD</option>
            </select>

                {/* Log In */}
            <Link
                href="/login"
                className="
                whitespace-nowrap 
                border 
                border-black 
                text-sm 
                text-black 
                px-3 
                py-2 
                transition-colors 
                hover:text-[#f26b45]"
            >
                Log In
            </Link>

            {/* Menu button */}
            <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="
            flex 
            h-10 
            w-10 
            items-center 
            justify-center 
            text-black 
            transition-colors 
            hover:text-[#f26b45]"
            >
            {isOpen ? (
                <X
                size={28}
                strokeWidth={1.8}
                aria-hidden="true"
                />
            ) : (
                <Menu
                size={28}
                strokeWidth={1.8}
                aria-hidden="true"
                />
            )}
            </button>
        </div>


      {/* Mobile menu */}
      {isOpen && (
        <div className="
        absolute 
        left-0 
        right-0 
        top-full 
        z-50 
        border-t 
        border-gray-200 
        bg-white 
        px-6 py-6 
        shadow-lg"
        >
          <nav className="flex flex-col items-center gap-5">

            {/* Navigation Links */}
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-center text-base text-black transition-colors hover:text-[#f26b45]"
              >
                {link.label}
              </Link>
            ))}

            {/* Sign Up */}
            <div className="mt-2 w-full border-t border-gray-200 pt-5">
              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                className="mx-auto mt-3 block border border-black px-5 py-3 text-center text-base text-white bg-[#f26b45] hover:bg-[#ffffff] transition-colors duration-200 hover:border-[#f26b45] hover:text-[#f26b45]"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;