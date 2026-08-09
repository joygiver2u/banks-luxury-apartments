"use client";

import Image from "next/image";
import { X } from "lucide-react";
import Link from "next/link";

export interface Apartment {
  id: string;
  name: string;
  location: string;
  image: string;
  price?: string;
}

interface ApartmentSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  location: string;
  checkInDate: string;
  checkOutDate: string;
  apartments: Apartment[];
}

const formatDate = (date: string) => {
  if (!date) return "";

  return date;
};

const ApartmentSearchModal = ({
  isOpen,
  onClose,
  location,
  checkInDate,
  checkOutDate,
  apartments,
}: ApartmentSearchModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black/30
        px-3
        py-5
        sm:px-6
      "
      role="dialog"
      aria-modal="true"
      aria-label="Available apartments"
    >
      {/* MODAL */}
      <div
        className="
          relative
          flex
          h-[92vh]
          w-full
          max-w-[1000px]
          flex-col
          overflow-hidden
          bg-white
          shadow-2xl
          sm:h-[88vh]
        "
      >
        {/* =================================================
            HEADER
            ================================================= */}
        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            gap-4
            px-6
            py-6
            sm:px-10
            sm:py-7
          "
        >
          <h2
            className="
              text-xl
              font-medium
              text-gray-900
              sm:text-2xl
            "
          >
            Apartments
          </h2>

          <div className="flex items-center gap-5">
            {/* DATE RANGE */}
            <div
              className="
                rounded-full
                bg-[#FFF3EF]
                px-5
                py-3
                text-sm
                font-medium
                text-[#F75C1E]
                sm:px-7
              "
            >
              {formatDate(checkInDate)} to {formatDate(checkOutDate)}
            </div>

            {/* CLOSE */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close apartment results"
              className="
                flex
                h-9
                w-9
                shrink-0
                cursor-pointer
                items-center
                justify-center
                text-gray-900
                transition
                hover:text-[#F75C1E]
              "
            >
              <X size={27} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* =================================================
            APARTMENT LIST
            ================================================= */}
        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            px-6
            pb-8
            sm:px-10
          "
        >
          {apartments.length === 0 ? (
            <div className="flex h-full items-center justify-center">
              <p className="text-sm text-gray-500">
                No apartments are currently available in {location}.
              </p>
            </div>
          ) : (
            <div className="space-y-10">
              {apartments.map((apartment) => (
                <article
                  key={apartment.id}
                  className="
                    grid
                    grid-cols-1
                    items-center
                    gap-5
                    sm:grid-cols-[168px_1fr_auto]
                    sm:gap-5
                  "
                >
                  {/* IMAGE */}
                  <div
                    className="
                      relative
                      h-[150px]
                      w-full
                      overflow-hidden
                      sm:h-[120px]
                      sm:w-[168px]
                    "
                  >
                    <Image
                      src={apartment.image}
                      alt={`${apartment.name} at ${apartment.location}`}
                      fill
                      sizes="168px"
                      className="object-cover"
                    />
                  </div>

                  {/* INFO */}
                  <div className="min-w-0">
                    <h3
                      className="
                        text-xl
                        font-medium
                        text-gray-900
                      "
                    >
                      {apartment.name}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-base
                        text-gray-500
                      "
                    >
                      {apartment.location}
                    </p>

                    {apartment.price && (
                      <div
                        className="
                          mt-3
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          bg-[#FFF3EF]
                          text-lg
                          text-[#F75C1E]
                        "
                      >
                        {apartment.price}
                      </div>
                    )}
                  </div>

                  {/* BUTTON */}
                  {/* <button
                    type="button"
                    className="
                      h-14
                      w-full
                      bg-[#F75C1E]
                      px-6
                      text-base
                      font-semibold
                      text-white
                      transition
                      hover:bg-[#df4f18]
                      sm:w-[180px]
                    "
                  >
                    View Apartment
                  </button> */}

                  <Link
                    href={`/apartments/${apartment.id}`}
                    className="
                        inline-flex
                        items-center
                        justify-center
                        bg-[#F75C1E]
                        px-6
                        py-4
                        text-sm
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:bg-[#df4f18]
                    "
                    >
                    View Apartment
                    </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApartmentSearchModal;