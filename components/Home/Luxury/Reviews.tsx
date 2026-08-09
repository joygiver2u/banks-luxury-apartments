"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Overall, my experience was excellent.",
  },
];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      aria-labelledby="reviews-heading"
      className="
        relative
        min-h-[707px]
        w-full
        overflow-hidden
        bg-white
        px-5
        py-0
        lg:min-h-[741px]
      "
    >
      {/* =========================================================
          DECORATIVE PROFILE IMAGES
          ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
        "
        aria-hidden="true"
      >
        {/* Main / Largest Profile */}
        <div
          className="
            absolute
            left-[15%]
            top-[37px]
            h-[64px]
            w-[64px]
            overflow-hidden
            rounded-full
            lg:left-[28.2%]
            lg:top-[91px]
            lg:h-[85px]
            lg:w-[85px]
          "
        >
          <Image
            src="/images/profile-1.jpg"
            alt=""
            fill
            sizes="145px"
            className="object-cover"
          />
        </div>

        {/* Far Left Profile */}
        <div
          className="
            absolute
            left-[5.2%]
            top-[163px]
            h-[36px]
            w-[36px]
            overflow-hidden
            rounded-full
            lg:left-[9.8%]
            lg:top-[248px]
            lg:h-[60px]
            lg:w-[60px]
          "
        >
          <Image
            src="/images/profile-2.jpg"
            alt=""
            fill
            sizes="85px"
            className="object-cover"
          />
        </div>

        {/* Upper Right Profile */}
        <div
          className="
            absolute
            right-[6%]
            top-[70px]
            h-[36px]
            w-[36px]
            overflow-hidden
            rounded-full
            lg:right-[31.1%]
            lg:top-[91px]
            lg:h-[55px]
            lg:w-[55px]
          "
        >
          <Image
            src="/images/profile-3.jpg"
            alt=""
            fill
            sizes="85px"
            className="object-cover"
          />
        </div>

        {/* Far Right / Lower Profile */}
        <div
          className="
            absolute
            right-[18%]
            top-[171px]
            h-[36px]
            w-[36px]
            overflow-hidden
            rounded-full
            lg:right-[15.6%]
            lg:top-[171px]
            lg:h-[45px]
            lg:w-[45px]
          "
        >
          <Image
            src="/images/profile-4.jpg"
            alt=""
            fill
            sizes="85px"
            className="object-cover"
          />
        </div>
      </div>

      {/* =========================================================
          MAIN REVIEWS CONTENT
          ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          flex-col
          items-center
          pt-[288px]
          text-center
          lg:pt-[248px]
        "
      >
        {/* Heading */}
        <h2
          id="reviews-heading"
          className="
            text-[40px]
            font-semibold
            leading-none
            tracking-tight
            text-black
            lg:text-[45px]
          "
        >
          Reviews
        </h2>

        {/* Supporting Text */}
        <p
          className="
            mt-[38px]
            max-w-[650px]
            px-2
            text-[16px]
            font-normal
            leading-6
            text-black
            lg:mt-[40px]
            lg:max-w-none
            lg:text-[12px]
          "
        >
          Know what our users are saying about their experience in our luxury
          apartments.
        </p>

        {/* =========================================================
            TESTIMONIAL
            ========================================================= */}

        <div
          className="
            relative
            mt-[52px]
            w-full
            lg:mt-[99px]
          "
        >
          {/* Pale Pink Divider */}
          <div
            className="
              mx-auto
              h-[5px]
              w-[92%]
              bg-[#fff0ed]
              lg:h-[5px]
              lg:w-[448px]
            "
            aria-hidden="true"
          />

          {/* Quote Area */}
          <div
            className="
              relative
              mx-auto
              flex
              min-h-[125px]
              w-full
              max-w-[650px]
              items-center
              justify-center
              px-12
              pt-[30px]
              lg:min-h-[125px]
              lg:px-16
              lg:pt-[20px]
            "
          >
            {/* Opening Quote */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-[22%]
                top-[23px]
                font-serif
                text-[76px]
                leading-none
                text-[#fff0ed]
                lg:left-[2%]
                lg:top-[5px]
                lg:text-[150px]
              "
            >
              “
            </span>

            {/* Testimonial */}
            <p
              key={activeIndex}
              className="
                relative
                z-10
                text-center
                text-[16px]
                font-normal
                leading-7
                text-black
                lg:text-[18px]
              "
            >
              {activeTestimonial.quote}
            </p>

            {/* Closing Quote */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                bottom-[-22px]
                right-[22%]
                font-serif
                text-[76px]
                leading-none
                text-[#fff0ed]
                lg:bottom-[-35px]
                lg:right-[2%]
                lg:text-[150px]
              "
            >
              ”
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================
          NAVIGATION BUTTONS
          ========================================================= */}

      <div
        className="
          absolute
          bottom-[19px]
          left-[30px]
          right-[37px]
          z-20
          flex
          items-center
          justify-between
          lg:bottom-[72px]
          lg:left-[86px]
          lg:right-[83px]
        "
      >
        {/* Previous */}
        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Previous review"
          className="
            flex
            h-[50px]
            w-[65px]
            items-center
            justify-center
            border
            cursor-pointer
            border-[#dedede]
            bg-white
            text-black
            transition-colors
            duration-300
            focus:outline-none
            lg:h-[60px]
            lg:w-[69px]
          "
        >
          <ArrowLeft
            size={27}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next review"
          className="
            flex
            h-[50px]
            w-[65px]
            items-center
            justify-center
            border
            cursor-pointer
            border-[#dedede]
            bg-white
            text-black
            transition-colors
            duration-300
            focus:outline-none
            lg:h-[60px]
            lg:w-[69px]
          "
        >
          <ArrowRight
            size={27}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </button>
      </div>
    </section>
  );
};

export default Reviews;