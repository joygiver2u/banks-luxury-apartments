import Link from "next/link";
import type { ComponentType } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

interface FooterLink {
  name: string;
  href: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: ComponentType<{ size?: number }>;
}

const locations: FooterLink[] = [
  {
    name: "Turnbull Apartments",
    href: "/locations/turnbull",
  },
  {
    name: "Temple Court",
    href: "/locations/temple-court",
  },
  {
    name: "Noah's Court",
    href: "/locations/noahs-court",
  },
  {
    name: "2nd Avenue",
    href: "/locations/2nd-avenue",
  },
  {
    name: "Acorn Place",
    href: "/locations/acorn-place",
  },
];

const policies: FooterLink[] = [
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "Booking Policy",
    href: "/booking-policy",
  },
];

const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    label: "TikTok",
    href: "#",
    icon: FaTiktok,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

        {/* =====================================================
            MAIN FOOTER CONTENT
            ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-12
            text-center
            md:grid-cols-2
            md:gap-x-12
            md:gap-y-14
            md:text-left
            lg:grid-cols-5
            lg:gap-10
          "
        >

          {/* ===================================================
              COLUMN 1 — CURRENCY & SOCIAL
              =================================================== */}

          <div className="flex flex-col items-center md:items-start">
            {/* Currency Selector */}

            <button
              type="button"
              aria-label="Select currency"
              className="
                inline-flex
                items-center
                justify-center
                border
                border-white-700
                px-5
                py-2.5
                text-sm
                font-medium
                text-gray-300
              "
            >
              Currency: NGN
            </button>

            {/* Social Media */}

            <nav
              aria-label="Social media"
              className="mt-7"
            >
              <ul className="flex items-center gap-5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <li key={social.label}>
                      <Link
                        href={social.href}
                        aria-label={`Visit our ${social.label} page`}
                        className="
                          h-9
                          w-9
                          items-center
                          justify-center
                        text-[#f26b45]
                          focus:outline-none
                        "
                      >
                        <Icon size={18} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* ===================================================
              COLUMN 2 — CONTACT
              =================================================== */}

          <div>
            <h2 className="text-base font-semibold text-gray-500">
              Contact Us
            </h2>

            <address className="mt-5 not-italic">
              <div>
                <a
                  href="tel:07048248091"
                  className="
                    mt-1
                    block
                    text-sm
                    text-gray-300
                  "
                >
                  0704 8248 091
                </a>
              </div>

              <div className="mt-4">
                <a
                  href="mailto:info@banksluxuryapartments.com"
                  className="
                    mt-1
                    block
                    break-all
                    text-sm
                    text-gray-300
                  "
                >
                  info@banksluxuryapartments.com
                </a>
              </div>
            </address>

            {/* Chat Button */}

            <button
              type="button"
              className="
                mt-6
                inline-flex
                items-center
                justify-center
                border
                border-white
                px-5
                py-2.5
                text-sm
                font-medium
                text-gray-300
                transition-all
                duration-300
                hover:border-[#000000]
                hover:bg-[#FFFFFF]
                hover:text-[#000000]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#f26b45]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-black
              "
            >
              Chat With Us
            </button>
          </div>

          {/* ===================================================
              COLUMN 3 — LOCATIONS
              =================================================== */}

          <nav aria-label="Apartment locations">
            <h2 className="text-base font-semibold text-gray-500">
              Locations
            </h2>

            <ul className="mt-5 space-y-3">
              {locations.map((location) => (
                <li key={location.name}>
                  <Link
                    href={location.href}
                    className="
                      text-sm
                      text-gray-300
                    "
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ===================================================
              COLUMN 4 — POLICIES
              =================================================== */}

          <nav aria-label="Policies">
            <h2 className="text-base font-semibold text-gray-500">
              Policies
            </h2>

            <ul className="mt-5 space-y-3">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <Link
                    href={policy.href}
                    className="
                      text-sm
                      text-gray-300
                    "
                  >
                    {policy.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ===================================================
              COLUMN 5 — AUTHENTICATION
              =================================================== */}

          <div
            className="
              flex
              flex-col
              items-center
              gap-4
              md:col-span-2
              md:flex-row
              md:justify-start
              lg:col-span-1
              lg:justify-end
            "
          >
            <Link
              href="/login"
              className="
                text-sm
                font-medium
                text-white
                transition-colors
                duration-300
                hover:text-[#f26b45]
                focus:outline-none
                focus-visible:text-[#f26b45]
              "
            >
              Log In
            </Link>

            <Link
              href="/signup"
              className="
                inline-flex
                min-w-[100px]
                items-center
                justify-center
                border 
                border-black
                bg-[#f26b45]
                px-5
                py-2.5
                text-sm
                font-medium
                text-white
                transition-colors
                duration-300
                hover:text-[#f26b45]
                hover:bg-[#000000]
                hover:border-[#f26b45]
              "
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* =====================================================
            COPYRIGHT
            ===================================================== */}

        <div
          className="
            mt-14
            border-t
            border-gray-800
            pt-7
            text-center
          "
        >
          <p className="text-xs text-gray-500 sm:text-sm">
            © Copyright 2026 Banks.LA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;