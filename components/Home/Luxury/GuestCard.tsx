"use client";

import { House } from "lucide-react";

interface GuestCardProps {
  name: string;
  property: string;
  active: boolean;
  onClick: () => void;
}

const GuestCard = ({
  name,
  property,
  active,
  onClick,
}: GuestCardProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`
        group
        w-full
        min-w-0
        px-7
        py-3.5
        text-left
        transition-all
        duration-300
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#ff5a36]
        focus-visible:ring-offset-2

        ${
          active
            ? "bg-black text-white"
            : "bg-[#fff1ee] text-[#858585] hover:bg-[#ffe9e5]"
        }

        lg:px-7
        lg:py-3.5
      `}
    >
      <div className="flex flex-col gap-1">
        <span
          className={`
            text-sm
            font-semibold
            leading-5
            sm:text-[15px]
            ${
              active
                ? "text-white"
                : "text-[#858585]"
            }
          `}
        >
          {name}
        </span>

        <span
          className={`
            flex
            items-center
            gap-1.5
            text-xs
            leading-4
            sm:text-sm
            ${
              active
                ? "text-white"
                : "text-[#8f8f8f]"
            }
          `}
        >
          <span
            className={`
              flex
              h-[18px]
              w-[18px]
              shrink-0
              items-center
              justify-center
              bg-white
            `}
          >
            <House
              size={10}
              strokeWidth={2}
              className="text-[#ff5a36]"
              aria-hidden="true"
            />
          </span>

          {property}
        </span>
      </div>
    </button>
  );
};

export default GuestCard;