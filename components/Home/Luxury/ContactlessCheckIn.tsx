"use client";

import {
  Clock3,
  ShieldCheck,
  Zap,
} from "lucide-react";

const keypadNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const features = [
  {
    label: "Fast Check In",
    icon: Zap,
  },
  {
    label: "Privacy",
    icon: ShieldCheck,
  },
  {
    label: "Zero Wait Time",
    icon: Clock3,
  },
];

const ContactlessCheckIn = () => {
  return (
    <section
      aria-labelledby="contactless-check-in-heading"
      className="
        w-full
        overflow-hidden
        bg-white
        px-5
        py-16
        sm:px-8
        sm:py-20
        lg:px-16
        lg:py-24
      "
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[32%_68%] lg:gap-8 xl:gap-12">
        {/* =====================================================
            LEFT COLUMN — KEYPAD
        ====================================================== */}
        <div
          className="
            relative
            flex
            flex-col
            items-center
            lg:items-start
          "
        >
          {/* Decorative orange line */}
          <div
            className="
              mb-12
              hidden
              h-px
              w-[345px]
              bg-[#ff5a2c]
              lg:block
            "
            aria-hidden="true"
          />

          {/* Keypad */}
          <div
            className="
              mx-auto
              w-fit
              lg:mx-0
              lg:ml-1
            "
            aria-label="Contactless check-in keypad"
          >
            {/* Numbers */}
            <div
              className="
                grid
                grid-cols-3
                gap-x-12
                gap-y-10
                sm:gap-x-14
                sm:gap-y-11
                lg:gap-x-14
                lg:gap-y-10
              "
            >
              {keypadNumbers.map((number) => (
                <button
                  key={number}
                  type="button"
                  aria-label={`Enter ${number}`}
                  className="
                    flex
                    h-[72px]
                    w-[72px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#ff5a2c]
                    bg-white
                    text-xl
                    font-normal
                    text-[#111111]
                    shadow-[inset_0_0_0_8px_#fff5f1]
                    transition-all
                    duration-300
                    hover:bg-[#ff5a2c]
                    hover:text-white
                    hover:shadow-none
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#ff5a2c]
                    focus:ring-offset-2
                    sm:h-[78px]
                    sm:w-[78px]
                    lg:h-[60px]
                    lg:w-[60px]
                  "
                >
                  {number}
                </button>
              ))}

              {/* Zero */}
              <button
                type="button"
                aria-label="Enter 0"
                className="
                  col-start-2
                  flex
                  h-[72px]
                  w-[72px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#ff5a2c]
                  bg-white
                  text-xl
                  font-normal
                  text-[#111111]
                  shadow-[inset_0_0_0_8px_#fff5f1]
                  transition-all
                  duration-300
                  hover:bg-[#ff5a2c]
                  hover:text-white
                  hover:shadow-none
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#ff5a2c]
                  focus:ring-offset-2
                  sm:h-[78px]
                  sm:w-[78px]
                  lg:h-[60px]
                  lg:w-[60px]
                "
              >
                0
              </button>
            </div>

            {/* Enter */}
            <button
              type="button"
              className="
                mx-auto
                mt-10
                flex
                h-12
                w-[160px]
                items-center
                justify-center
                rounded-full
                border
                border-[#ff5a2c]
                bg-[#fff5f1]
                text-base
                font-medium
                text-[#111111]
                transition-all
                duration-300
                hover:bg-[#ff5a2c]
                hover:text-white
                focus:outline-none
                focus:ring-2
                focus:ring-[#ff5a2c]
                focus:ring-offset-2
                lg:ml-[43px]
                lg:mt-12
              "
            >
              Enter
            </button>
          </div>
        </div>

        {/* =====================================================
            RIGHT COLUMN — CONTENT
        ====================================================== */}
        <div
          className="
            flex
            min-w-0
            flex-col
            lg:pt-0
          "
        >
          {/* Heading */}
          <div>
            <h2
              id="contactless-check-in-heading"
              className="
                text-3xl
                font-medium
                leading-[1.1]
                tracking-tight
                text-[#111111]
                sm:text-4xl
                lg:text-[50px]
                lg:leading-[1.05]
              "
            >
              <span className="text-[#ff5a2c]">
                Contactless
              </span>{" "}
              Check in
            </h2>

            <p
              className="
                mt-5
                max-w-[850px]
                text-sm
                leading-7
                text-[#888888]
                sm:text-base
                lg:text-[18px]
                lg:leading-7
              "
            >
              No more check in hassles! Check in by yourself
              with your access code.
            </p>
          </div>

          {/* Feature Cards */}
          <div
            className="
              mt-10
              grid
              grid-cols-3
              gap-2
              sm:gap-4
              lg:mt-11
              lg:gap-5
            "
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.label}
                  className="
                    flex
                    min-h-[72px]
                    items-center
                    justify-center
                    gap-2
                    border
                    border-[#ffe0d7]
                    bg-white
                    px-2
                    py-3
                    transition-all
                    duration-300
                    sm:min-h-[82px]
                    sm:px-4
                    lg:min-h-[76px]
                    lg:justify-start
                    lg:px-2
                  "
                >
                  <Icon
                    size={14}
                    strokeWidth={1.8}
                    className="
                      shrink-0
                      text-[#ff5a2c]
                      sm:h-7
                      sm:w-7
                    "
                    aria-hidden="true"
                  />

                  <span
                    className="
                      text-center
                      text-[12px]
                      font-medium
                      leading-4
                      text-[#222222]
                      sm:text-xs
                      lg:text-[14px]
                      lg:leading-6
                    "
                  >
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Description */}
          <p
            className="
              mt-10
              max-w-[1050px]
              text-sm
              leading-7
              text-[#888888]
              sm:text-[15px]
              sm:leading-8
              lg:mt-16
              lg:text-[17px]
              lg:leading-8
            "
          >
            Cool, contemporary and stylish – our new apartments
            with smart doors feature a sleek design that adds
            warmth to the surroundings. Our apartment check in
            provides you easy access to your living space. Simply
            press a button on the outside of your door, and enter
            your living room or bedroom. This is a great way to
            get in and out of your apartment without the need for
            keys or smart cards. Use the access code provided on
            your booking details page to gain access to your room
            at any time during your stay. We prioritize
            convenience at Banks.L.A ensuring that you have all
            you need already at your fingertips, literally!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactlessCheckIn;