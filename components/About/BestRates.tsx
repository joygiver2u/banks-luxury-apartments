import Image from "next/image";
import { Award } from "lucide-react";

interface RateImage {
  src: string;
  alt: string;
}

const rateImages: RateImage[] = [
  {
    src: "/images/rates-1.png",
    alt: "Luxury apartment living room with elegant seating",
  },
  {
    src: "/images/rates-2.png",
    alt: "Luxury apartment interior with decorative console table",
  },
  {
    src: "/images/rates-3.png",
    alt: "Elegant luxury apartment workspace and interior",
  },
];

const BestRates = () => {
  return (
    <section aria-labelledby="best-rates-heading" className="w-full bg-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-12 pb-20 md:pt-14 md:pb-24 lg:pt-16 lg:pb-28 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        {/* =====================================================
            LEFT — CONTENT
            ===================================================== */}

        <div className="flex flex-col justify-center lg:pr-6">
          {/* Heading */}
          <div className="flex items-center gap-2">
            <h2
              id="best-rates-heading"
              className="text-2xl font-normal leading-tight tracking-tight text-black sm:text-3xl lg:text-3xl
              "
            >
              The Best <span className="text-[#F75C1E]">Rates</span>
            </h2>

            <Award
              aria-hidden="true"
              className="h-6 w-6 shrink-0 text-[#ed862c] sm:h-7 sm:w-7 lg:h-8 lg:w-8"
              strokeWidth={1.8}
            />
          </div>

          {/* Description */}
          <p className="mt-8 max-w-175 text-[10px] leading-7 text-gray-600 sm:text-[11px] sm:leading-8 lg:mt-9">
            You won&apos;t find better rates on our listed apartments elsewhere
            – we guarantee it. You will find our properties on other booking
            sites (because we put them there), but all our leads read back to
            our reservations team. Save yourself, the excess service fees and
            booking commissions by booking the best deal right here.
          </p>
        </div>

        {/* =====================================================
            RIGHT — IMAGE GALLERY
            ===================================================== */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[0.8fr_1.2fr] lg:grid-rows-[215px_315px] lg:gap-x-5 lg:gap-y-4">
          {/* Image 1 — Top Left */}
          <div className="group relative h-[220px] overflow-hidden sm:h-[240px] lg:col-start-1 lg:row-start-1 lg:h-full">
            <Image
              src={rateImages[0].src}
              alt={rateImages[0].alt}
              fill
              sizes="
                    (max-width: 639px) 100vw,
                    (max-width: 1023px) 50vw,
                    20vw
                "
              className="object-cover"
            />
          </div>

          {/* Image 2 — Bottom Left */}
          <div
            className="group relative h-[220px] overflow-hidden sm:h-[240px] lg:col-start-1 lg:row-start-2 lg:h-full">
            <Image
              src={rateImages[1].src}
              alt={rateImages[1].alt}
              fill
              sizes="
                    (max-width: 639px) 100vw,
                    (max-width: 1023px) 50vw,
                    20vw
                "
              className=" object-cover"
            />
          </div>

          {/* Image 3 — Tall Right */}
          <div
            className="group relative h-[460px] overflow-hidden sm:col-span-2 sm:h-[540px] lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:h-full">
            <Image
              src={rateImages[2].src}
              alt={rateImages[2].alt}
              fill
              sizes="
                    (max-width: 639px) 100vw,
                    (max-width: 1023px) 100vw,
                    35vw
                "
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestRates;
