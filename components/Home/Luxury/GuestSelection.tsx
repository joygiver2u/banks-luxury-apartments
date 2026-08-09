"use client";

import { useState } from "react";
import GuestCard from "./GuestCard";

const guests = [
  {
    name: "Raphael Acquah",
    property: "Temple Court",
  },
  {
    name: "Bunmi Lijadu",
    property: "Noah's Court",
  },
  {
    name: "SIMI",
    property: "Noah's Court",
  },
];

const GuestSelection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      aria-label="Guest booking selection"
      className="w-full bg-white"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1776px]
          px-5
          sm:px-8
          lg:px-[52px]
        "
      >
        {/* Desktop */}
        <div
          className="
            hidden
            gap-7
            lg:grid
            lg:grid-cols-3
          "
        >
          {guests.map((guest, index) => (
            <GuestCard
              key={guest.name}
              name={guest.name}
              property={guest.property}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Mobile / Tablet */}
        <div
          className="
            overflow-x-auto
            scrollbar-none
            lg:hidden
          "
        >
          <div className="w-full min-w-0">
            <GuestCard
              name={guests[activeIndex].name}
              property={guests[activeIndex].property}
              active
              onClick={() => {}}
            />
          </div>
        </div>

        {/* Mobile guest selectors */}
        <div className="mt-4 flex justify-center gap-2 lg:hidden">
          {guests.map((guest, index) => (
            <button
              key={guest.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Select ${guest.name}`}
              aria-pressed={activeIndex === index}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300
                ${
                  activeIndex === index
                    ? "w-8 bg-black"
                    : "w-2 bg-[#e8d8d4]"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestSelection;