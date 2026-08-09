"use client";

import { useState } from "react";
import { CircleHelp, ChevronDown } from "lucide-react";

interface FAQItemProps {
  id: string;
  question: string;
  answer?: string;
}

const FAQItem = ({
  id,
  question,
  answer = "",
}: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasAnswer = answer.trim().length > 0;

  const handleToggle = () => {
    if (hasAnswer) {
      setIsOpen((previous) => !previous);
    }
  };

  return (
    <div className="border-b border-white/15">
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-answer`}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-6
          py-6
          text-left
          transition-colors
          duration-300
          hover:text-white/80
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#f4512a]
          focus-visible:ring-offset-2
          focus-visible:ring-offset-black
          sm:py-7
          lg:py-8
        "
      >
        <span
          className="
            min-w-0
            flex-1
            text-sm
            font-medium
            leading-6
            text-white
            sm:text-base
            lg:text-[17px]
          "
        >
          {question}
        </span>

        <span className="flex shrink-0 items-center gap-3">
          <CircleHelp
            size={20}
            strokeWidth={1.5}
            className="
              text-[#f4512a]
              transition-transform
              duration-300
            "
            aria-hidden="true"
          />

          {hasAnswer && (
            <ChevronDown
              size={16}
              strokeWidth={1.5}
              className={`
                text-[#f4512a]
                transition-transform
                duration-300
                ${isOpen ? "rotate-180" : ""}
              `}
              aria-hidden="true"
            />
          )}
        </span>
      </button>

      {hasAnswer && (
        <div
          id={`${id}-answer`}
          className={`
            grid
            transition-[grid-template-rows,opacity]
            duration-300
            ease-in-out
            ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
          `}
        >
          <div className="overflow-hidden">
            <p
              className="
                max-w-3xl
                pb-7
                pr-10
                text-sm
                leading-7
                text-white/55
                sm:text-[15px]
              "
            >
              {answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQItem;