"use client";

import Image from "next/image";
import {
  Building2,
  CheckCircle2,
  CreditCard,
  MapPin,
} from "lucide-react";
import { useState } from "react";

import BookingStepCard from "./BookingStepCard";

const bookingSteps = [
  {
    icon: MapPin,
    text: "Select one of our locations, you would like to stay in",
  },
  {
    icon: Building2,
    text: "Select an apartment within the building and let us know how long you would stay.",
  },
  {
    icon: CreditCard,
    text: "Make payment for the apartment you've chosen",
  },
  {
    icon: CheckCircle2,
    text: "You’ve successfully booked an apartment..",
  },
];

const apartments = [
  "M1",
  "M2",
  "M3",
  "M4",
  "M5",
  "M6",
  "M7",
  "M8",
];

const BookingSteps = () => {
  const [selectedApartment, setSelectedApartment] = useState("M2");

  return (
    <section
      aria-labelledby="booking-steps-heading"
      className="
        w-full
        overflow-hidden
        bg-white
        px-5
        py-16
        sm:px-8
        sm:py-20
        lg:px-12
        lg:py-24
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          items-start
          gap-14
          lg:grid-cols-2
          lg:gap-16
          xl:gap-20
        "
      >
        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}
        <div className="w-full">
          {/* Heading */}
          <h2
            id="booking-steps-heading"
            className="
              max-w-xl
              text-2xl
              font-bold
              leading-tight
              tracking-tight
              text-[#111111]
              sm:text-4xl
              lg:text-4xl
              lg:leading-[1.5]
            "
          >
            Book your short let apartment in{" "}
            <span className="text-[#F45A22]">
              simple
            </span>{" "}
            steps
          </h2>

          {/* Booking Steps */}
          <div
            className="
              mt-9
              flex
              flex-col
              gap-4
              sm:mt-10
              sm:gap-5
            "
          >
            {bookingSteps.map((step) => (
              <BookingStepCard
                key={step.text}
                icon={step.icon}
                text={step.text}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            RIGHT IMAGE AREA
        ====================================================== */}
        <div className="w-full">
          {/* Image + Desktop Overlays */}
          <div
            className="
              relative
              mt-12 
              lg:mt-0
            "
          >
            {/* Decorative graphic */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -top-72
                    left-1/2
                    z-0
                    h-[300px]
                    w-[100px]
                    -translate-x-1/2
                    bg-[repeating-conic-gradient(from_180deg_at_50%_100%,transparent_0deg,transparent_6deg,#fff0eb_6deg,#fff0eb_7deg)]
                    opacity-90
                    sm:-top-80
                    sm:h-[50px]
                    sm:w-[50px]
                    lg:-top-80
                    lg:h-[350px]
                    lg:w-[300px]
                "
            />

            {/* Main Apartment Image */}
            <div
              className="
                relative
                z-10
                h-97.5
                w-full
                overflow-hidden
                rounded-tl-[110px]
                sm:h-125
                sm:rounded-tl-[150px]
                lg:h-150
                lg:rounded-tl-[250px]
              "
            >
              <Image
                src="/images/booking-apartment.jpg"
                alt="Luxury apartment interior"
                fill
                sizes="
                  (max-width: 1023px) 100vw,
                  50vw
                "
                className="
                  object-cover
                  object-center
                "
              />
            </div>

            {/* =================================================
                DESKTOP BOOKING NOTIFICATION
            ================================================== */}
            <div
              className="
                absolute
                left-[8%]
                top-24
                z-30
                flex
                min-h-[64px]
                max-w-[280px]
                items-center
                gap-3
                bg-white
                px-4
                py-3
                shadow-sm

                sm:left-6
                sm:top-28
                sm:w-[80%]

                lg:left-[9%]
                lg:top-[45%]
                lg:w-[78%]
                lg:px-5
              "
            >
              <Image
                src="/images/booking-avatar.jpg"
                alt=""
                width={42}
                height={42}
                className="h-10 w-10 shrink-0 rounded-full object-cover"
              />

              <p
                className="
                  text-sm
                  font-medium
                  leading-5
                  text-[#222222]
                "
              >
                You have selected Apartment{" "}
                {selectedApartment} in Noah’s Court
              </p>
            </div>

            {/* =================================================
                DESKTOP APARTMENT SELECTOR
            ================================================== */}
            <div
              className="
                absolute
                bottom-8
                right-6
                z-30
                hidden
                w-[240px]
                grid-cols-4
                overflow-hidden
                bg-white
                shadow-xl
                lg:grid
              "
            >
              {apartments.map((apartment) => {
                const isSelected =
                  selectedApartment === apartment;

                return (
                  <button
                    key={apartment}
                    type="button"
                    onClick={() =>
                      setSelectedApartment(apartment)
                    }
                    aria-label={`Select Apartment ${apartment}`}
                    aria-pressed={isSelected}
                    className={`
                      flex
                      h-14
                      items-center
                      justify-center
                      border-b
                      border-r
                      border-gray-200
                      text-sm
                      font-medium
                      transition-colors
                      duration-200
                      focus:outline-none
                      focus:ring-2
                      focus:ring-inset
                      focus:ring-[#F45A22]
                      ${
                        isSelected
                          ? "bg-[#F45A22] text-white"
                          : "bg-white text-[#222222] hover:bg-gray-50"
                      }
                    `}
                  >
                    {apartment}
                  </button>
                );
              })}
            </div>
          </div>

          {/* =================================================
              MOBILE NOTIFICATION
          ================================================== */}
          {/* <div
            className="
              mt-4
              flex
              items-center
              gap-3
              bg-white
              px-4
              py-3
              shadow-md
              lg:hidden
            "
          >
            <Image
              src="/images/booking-avatar.jpg"
              alt=""
              width={42}
              height={42}
              className="
                h-10
                w-10
                shrink-0
                rounded-full
                object-cover
              "
            />

            <p
              className="
                text-sm
                font-medium
                leading-5
                text-[#222222]
              "
            >
              You have selected Apartment{" "}
              {selectedApartment} in Noah’s Court
            </p>
          </div> */}

          {/* =================================================
              MOBILE APARTMENT SELECTOR
          ================================================== */}
          <div
            className="
              mt-4
              grid
              grid-cols-4
              overflow-hidden
              bg-white
              shadow-md
              lg:hidden
            "
          >
            {apartments.map((apartment) => {
              const isSelected =
                selectedApartment === apartment;

              return (
                <button
                  key={apartment}
                  type="button"
                  onClick={() =>
                    setSelectedApartment(apartment)
                  }
                  aria-label={`Select Apartment ${apartment}`}
                  aria-pressed={isSelected}
                  className={`
                    flex
                    h-12
                    items-center
                    justify-center
                    border-b
                    border-r
                    border-gray-200
                    text-sm
                    font-medium
                    transition-colors
                    duration-200
                    focus:outline-none
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-[#F45A22]
                    ${
                      isSelected
                        ? "bg-[#F45A22] text-white"
                        : "bg-white text-[#222222] hover:bg-gray-50"
                    }
                  `}
                >
                  {apartment}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;