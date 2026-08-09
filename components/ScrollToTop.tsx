"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");

    // If the page has a Hero section, use IntersectionObserver
    if (hero) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Show button when Hero is no longer visible
          setIsVisible(!entry.isIntersecting);
        },
        {
          threshold: 0,
        }
      );

      observer.observe(hero);

      return () => {
        observer.disconnect();
      };
    }

    // Fallback for pages without a Hero section
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`
        fixed
        bottom-4
        right-4
        z-50
        flex
        h-12
        w-12
        cursor-pointer
        items-center
        justify-center
        bg-[#f75c1e]
        text-white
        shadow-md
        transition-all
        duration-300
        ease-out
        hover:-translate-y-0.5
        hover:bg-[#df4d17]
        hover:shadow-lg
        active:scale-95
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-white
        focus-visible:ring-offset-2
        focus-visible:ring-offset-black
        sm:bottom-6
        sm:right-6
        sm:h-12
        sm:w-12
        lg:bottom-8
        lg:right-8
        lg:h-14
        lg:w-14
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }
      `}
    >
      <ChevronUp
        size={24}
        strokeWidth={2}
        aria-hidden="true"
      />
    </button>
  );
};

export default ScrollToTop;