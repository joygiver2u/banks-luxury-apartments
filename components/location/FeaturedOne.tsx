"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  MapPin,
  Banknote,
  House,
} from "lucide-react";

interface Property {
  name: string;
  address: string;
  description: string[];
  amenities: string[];
  additionalFeatures: number;
  images: string[];
}

const property: Property = {
  name: "Turnbull Apartments",
  address: "35 Turnbull Road, Ikoyi, Lagos",

  description: [
    "Turnbull Apartments offers three luxurious three-bedroom apartments designed for comfort, style, and modern living. Every space is carefully cureted for elegance and convenience, making it the perfect choice for those who appreciate premium living.",
  ],

  amenities: ["Gym", "Pool", "Parking Space"],

  additionalFeatures: 5,

  images: [
    "/images/turnbull-1.png",
    "/images/turnbull-2.png",
    "/images/turnbull-3.png",
    "/images/turnbull-4.png",
  ],
};

const FeaturedOne = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isAnimating, setIsAnimating] = useState(false);

  const totalImages = property.images.length;

  /*
   * Automatically change image every 5 seconds.
   */
  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((previousIndex) => {
        return (previousIndex + 1) % totalImages;
      });
    }, 5000);

    return () => window.clearInterval(interval);
  }, [totalImages]);

  return (
    <section
      aria-labelledby="featured-property-heading"
      className="w-full bg-white"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-12 md:px-8 md:py-16 lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)] lg:gap-16 lg:px-12 lg:pt-20 lg:pb-8">
        {/* =====================================================
            IMAGE SLIDER
            ===================================================== */}

        <div
          className="order-1 min-w-0 flex flex-col lg:order-2">
          {/* Image Slider */}
            <div className="w-full min-w-0">
                <div className="relative flex h-[540px] w-full items-center justify-center overflow-hidden bg-[#F75C1E]/10 sm:h-[600px] lg:h-[640px]">
                    <div className="relative h-[85%] w-[88%] overflow-hidden">
                    <Image
                        src={property.images[currentIndex]}
                        alt={`${property.name} interior`}
                        fill
                        sizes="(max-width: 639px) 88vw, (max-width: 1023px) 80vw, 50vw"
                        className="object-cover"
                        priority
                    />
                    </div>
                </div>
            </div>
        </div>

        {/* =====================================================
            PROPERTY DETAILS
            ===================================================== */}

        <div
          className="
            order-2
            min-w-0
            flex
            flex-col
            justify-center
            lg:order-1
          "
        >
          {/* Property Name */}
          <h2
            id="featured-property-heading"
            className="
              text-2xl
              font-semibold
              leading-tight
              tracking-wide
              text-[#F75C1E]
              sm:text-3xl
              lg:text-4xl
            "
          >
            {property.name}
          </h2>

          {/* Address */}
          <div
            className="
              mt-4
              flex
              items-start
              gap-2
              text-sm
              font-medium
              text-black
              sm:text-base
            "
          >
            <MapPin
              aria-hidden="true"
              className="
                mt-0.5
                h-5
                w-5
                shrink-0
                text-black
              "
              strokeWidth={1.8}
            />

            <address className="not-italic">
              {property.address}
            </address>
          </div>

          {/* Description */}
          <div
            className="
              mt-6
              space-y-4
              text-sm
              leading-7
              text-gray-500
              sm:text-base
              sm:leading-8
            "
          >
            {property.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {/* Amenities */}
          <div className="mt-7">
            <div className="flex flex-wrap gap-2">
              {property.amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="
                    inline-flex
                    items-center
                    rounded-md
                    bg-[#F75C1E]/10
                    px-4
                    py-2
                    text-xs
                    font-medium
                    text-gray-700
                    sm:text-sm
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      mr-2
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#F75C1E]
                    "
                  />

                  {amenity}
                </span>
              ))}

              <span
                className="
                  inline-flex
                  items-center
                  rounded-md
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-gray-500
                  sm:text-sm
                "
              >
                +{property.additionalFeatures} Building Features
              </span>
            </div>
          </div>

          {/* Price / Apartment Information */}
        <div className="mt-8 grid grid-cols-1 border border-orange-100 sm:grid-cols-2">
            {/* Starting Price */}
            <div className="flex items-center gap-4 border-b border-orange-50 px-3 py-5 sm:border-b-0 sm:border-r">
                <Banknote
                aria-hidden="true"
                className="h-7 w-5 shrink-0 text-[#F75C1E]"
                strokeWidth={1.2}
                />

                <div>
                <p className="text-base font-medium text-gray-400">
                    Starting at
                </p>
                </div>
            </div>

            {/* Apartment Count */}
            <div className="flex items-center gap-4 px-6 py-5">
                <House
                aria-hidden="true"
                className="h-7 w-5 shrink-0 text-[#F75C1E]"
                strokeWidth={1.2}
                />

                <div>
                <p className="text-base font-medium text-gray-900">
                    0 Apartment
                </p>
                </div>
            </div>
        </div>

          {/* CTA */}
          <a
            href="/about"
            className="
              group
              mt-8
              inline-flex
              self-end
              border
              border-[#F45A22]
              overflow-hidden
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#F45A22]
              focus-visible:ring-offset-2
              lg:ml-14
            "
          >
            <span
              className="
                flex
                items-center
                bg-[#F45A22]
                px-7
                py-4
                text-sm
                font-medium
                text-white
                transition-colors
                duration-300
                hover:text-[#F45A22]
                group-hover:bg-white
              "
            >
              View Building
            </span>

            {/* Arrow */}
            <span
              className="
                flex
                min-w-12.5
                items-center
                justify-center
                border
                border-white
                bg-white
                text-[#F45A22]
                transition-colors
                duration-300
                hover:border-white
                group-hover:bg-white
              "
            >
              <ArrowRight
                size={22}
                strokeWidth={1.5}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
                aria-hidden="true"
              />
            </span>
          </a>
        </div>
      </div>

      {/* =======================================================
          SLIDER ANIMATION
          ======================================================= */}

      {/* <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style> */}
    </section>

    
  );
};

export default FeaturedOne;