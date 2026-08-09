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
  price: string;
  apartments: number;
  images: string[];
}

const property: Property = {
  name: "2nd Avenue",
  address: "8, oba adeyinka oyekan avenue",

  description: [
    '2nd avenue apartments houses 4 luxurious short-let apartments in the heart of Ikoyi - 1 studio apartments, 2 bedroom maisonette and a 3 bedroom flat. These apartments are reserved for the elite, customised for the classy, and designed to align with the elegance of luxury. It is the "crème de la crème" of short-let apartments.',
  ],

  amenities: ["Gym", "Pool", "Parking Space"],

  additionalFeatures: 7,

  price: "₦1,000 per night",

  apartments: 9,

  images: [
    "/images/avenue-1.png",
    "/images/avenue-2.png",
    "/images/avenue-3.png",
    "/images/avenue-4.png",
  ],
};

const FeaturedFour = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalImages = property.images.length;

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;

    setIsAnimating(true);
    setCurrentIndex(index);

    window.setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

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
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          gap-12
          px-6
          py-12
          md:px-8
          md:py-16
          lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)]
          lg:gap-16
          lg:px-12
          lg:pt-8
          lg:pb-8
        "
      >
        {/* =====================================================
            IMAGE SLIDER
            ===================================================== */}

        <div className="order-1 min-w-0 flex flex-col lg:order-2">
          {/* Image Slider */}
          <div className="w-full min-w-0">
            <div
              className="relative flex h-135 w-full items-center justify-center overflow-hidden bg-[#F75C1E]/10 sm:h-[600px] lg:h-[640px] "
            >
              {/* Background */}
              <div
                className="relative h-[85%] w-[88%] overflow-hidden"
              >
                <Image
                  src={property.images[currentIndex]}
                  alt={`${property.name} interior`}
                  fill
                  sizes="(max-width: 639px) 88vw, (max-width: 1023px) 80vw, 50vw"
                  className="object-cover"
                  priority={currentIndex === 0}
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
          "
        >
          {/* Property Name */}
          <h2
            id="featured-property-heading"
            className="
              text-2xl
              capitalize
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

            <address className="not-italic capitalize">
              {property.address}
            </address>
          </div>

          {/* Description */}
          <div
            className="
              mt-6
              space-y-4
              text-sm
              capitalze
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

          {/* =================================================
              PRICE / APARTMENT INFORMATION
              ================================================= */}

          <div
            className="
              mt-8
              grid
              grid-cols-1
              border
              border-orange-100
              sm:grid-cols-2
            "
          >
            {/* Starting Price */}
            <div className="flex items-center gap-4 border-b border-orange-50 px-3 py-5 sm:border-b-0 sm:border-r">
              <Banknote
                aria-hidden="true"
                className="
                  h-7
                  w-5
                  shrink-0
                  text-[#F75C1E]
                "
                strokeWidth={1.2}
              />

              <div>
                <p className="text-base font-medium text-gray-400">
                  Starting at
                </p>

                <p
                  className="
                    text-sm
                    font-light
                    text-gray-900
                    sm:text-sm
                  "
                >
                  {property.price}
                </p>
              </div>
            </div>

            {/* Apartment Count */}
            <div
              className="
                flex
                items-center
                gap-4
                px-6
                py-5
              "
            >
              <House
                aria-hidden="true"
                className="
                  h-7
                  w-5
                  shrink-0
                  text-[#F75C1E]
                "
                strokeWidth={1.2}
              />

              <p
                className="
                  mt-1
                  text-md
                  text-black
                "
              >
                {property.apartments}
              </p>
              <p className="text-md text-black">
                    Apartments
              </p>
            </div>
          </div>

          {/* =================================================
              CTA
              ================================================= */}

          <a
            href="/about"
            className="
              group
              mt-8
              inline-flex
              self-start
              overflow-hidden
              border
              border-[#F45A22]
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
                group-hover:bg-white
                group-hover:text-[#F45A22]
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

      {/* Slider Animation */}
      <style jsx>{`
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
      `}</style>
    </section>
  );
};

export default FeaturedFour;