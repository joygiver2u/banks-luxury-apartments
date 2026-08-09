"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ApartmentGalleryProps {
  images: string[];
  apartmentName: string;
}

interface Apartment {
  id: string;
  name: string;
  images: string[];
}

const ApartmentGallery = ({
  images,
  apartmentName,
}: ApartmentGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const changeImage = (index: number) => {
    if (index === activeIndex) return;

    setIsChanging(true);

    setTimeout(() => {
      setActiveIndex(index);
      setIsChanging(false);
    }, 150);
  };

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setIsChanging(true);

      setTimeout(() => {
        setActiveIndex((current) =>
          current === images.length - 1 ? 0 : current + 1
        );

        setIsChanging(false);
      }, 150);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

   const apartments: Apartment[] = [
    {
      id: "f1",
      name: "Apartment F1",
      images: [
        "/images/apartments/F1-1.png",
        "/images/apartments/F1-2.png",
        "/images/apartments/F1-3.png",
        "/images/apartments/F1-4.png",
      ],
    },

    {
      id: "f2",
      name: "Apartment F2",
      images: [
        "/images/apartments/F2-1.png",
        "/images/apartments/F2-2.png",
        "/images/apartments/F2-3.png",
        "/images/apartments/F2-4.png",
      ],
    },

    {
      id: "f3",
      name: "Apartment F3",
      images: [
        "/images/apartments/F3-1.png",
        "/images/apartments/F3-2.png",
        "/images/apartments/F3-3.png",
        "/images/apartments/F3-4.png",
      ],
    },

    {
      id: "m3",
      name: "Apartment M3",
      images: [
        "/images/apartments/M3-1.png",
        "/images/apartments/M3-2.png",
        "/images/apartments/M3-3.png",
        "/images/apartments/M3-4.png",
      ],
    },

    {
      id: "m6",
      name: "Apartment M6",
      images: [
        "/images/apartments/M6-1.png",
        "/images/apartments/M6-2.png",
        "/images/apartments/M6-3.png",
        "/images/apartments/M6-4.png",
      ],
    },

    {
      id: "m1",
      name: "Apartment M1",
      images: [
        "/images/apartments/M1-1.png",
        "/images/apartments/M1-2.png",
        "/images/apartments/M1-3.png",
        "/images/apartments/M1-4.png",
      ],
    },

    {
      id: "m2",
      name: "Apartment M2",
      images: [
        "/images/apartments/M2-1.png",
        "/images/apartments/M2-2.png",
        "/images/apartments/M2-3.png",
        "/images/apartments/M2-4.png",
      ],
    },

    {
      id: "m4",
      name: "Apartment M4",
      images: [
        "/images/apartments/M4-1.png",
        "/images/apartments/M4-2.png",
        "/images/apartments/M4-3.png",
        "/images/apartments/M4-4.png",
      ],
    },

    {
      id: "m5",
      name: "Apartment M5",
      images: [
        "/images/apartments/M5-1.png",
        "/images/apartments/M5-2.png",
        "/images/apartments/M5-3.png",
        "/images/apartments/M5-4.png",
      ],
    },
  ];

  

  return (
    <div className="w-full">
      {/* =====================================================
          LARGE IMAGE
          ===================================================== */}
      <div className="relative h-[350px] w-full overflow-hidden sm:h-[450px] lg:h-[500px]">
        <Image
          key={images[activeIndex]}
          src={images[activeIndex]}
          alt={`${apartmentName} - Image ${activeIndex + 1}`}
          fill
          priority={activeIndex === 0}
          sizes="(max-width: 1024px) 100vw, 65vw"
          className={`
            object-cover
            transition-all
            duration-500
            ease-out
            ${
              isChanging
                ? "translate-x-8 opacity-0"
                : "translate-x-0 opacity-100"
            }
          `}
        />
      </div>

      {/* =====================================================
          THUMBNAILS
          ===================================================== */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => changeImage(index)}
              aria-label={`View image ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
              className={`
                relative
                h-20
                w-24
                flex-shrink-0
                overflow-hidden
                border-2
                transition-all
                duration-300
                ${
                  isActive
                    ? "border-[#F75C1E]"
                    : "border-transparent hover:border-[#F75C1E]/50"
                }
              `}
            >
              <Image
                src={image}
                alt={`${apartmentName} thumbnail ${index + 1}`}
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ApartmentGallery;