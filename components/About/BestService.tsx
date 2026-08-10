import Image from "next/image";
import { Award } from "lucide-react";

const BestService = () => {
  return (
    <section
      aria-labelledby="best-service-heading"
      className="w-full bg-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-20 pb-12 md:px-8 md:pt-24 md:pb-14 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:pt-28 lg:pb-16">
        {/* =====================================================
            IMAGE COLLAGE
            ===================================================== */}
        <div className="relative mx-auto h-[480px] w-full max-w-[560px] sm:h-[550px] lg:h-[580px]">
          {/* Decorative orange block */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-[58.4%]
              top-[8%]
              z-0
              h-[125px]
              w-[125px]
              bg-[#f75c1e]
              sm:h-[145px]
              sm:w-[145px]
            "
          />

          {/* Main upper-left image */}
          <div
            className="
              absolute
              left-0
              top-0
              z-10
              h-[275px]
              w-[43%]
              overflow-hidden
              shadow-lg
              sm:h-[320px]
            "
          >
            <Image
              src="/images/living-room.png"
              alt="Luxury apartment interior"
              fill
              sizes="
                (max-width: 640px) 58vw,
                (max-width: 1024px) 45vw,
                30vw
              "
              className="object-cover"
            />
          </div>

          {/* Lower-left image */}
          <div
            className="
              absolute
              bottom-[3%]
              left-[15%]
              top-[38%]
              z-20
              h-[275px]
              w-[43%]
              overflow-hidden
              shadow-lg
              sm:h-[320px]
            "
          >
            <Image
              src="/images/bedroom.png"
              alt="Luxury apartment living area"
              fill
              sizes="
                (max-width: 640px) 43vw,
                (max-width: 1024px) 35vw,
                25vw
              "
              className="object-cover"
            />
          </div>

          {/* Right vertical image */}
          <div
            className="
              absolute
              right-0
              left-[43%]
              top-[18%]
              z-10
              h-[275px]
              w-[42%]
              overflow-hidden
              shadow-lg
              sm:h-[320px]
            "
          >
            <Image
              src="/images/concierge.png"
              alt="Luxury apartment bedroom"
              fill
              sizes="
                (max-width: 640px) 42vw,
                (max-width: 1024px) 32vw,
                22vw
              "
              className="object-cover"
            />
          </div>
        </div>

        {/* =====================================================
            CONTENT
            ===================================================== */}
        <div
          className="
            flex
            flex-col
            justify-center
            lg:pl-4
          "
        >
          {/* Heading + Badge */}
          <div className="flex items-center gap-3">
            <h2
              id="best-service-heading"
              className="
                text-2xl
                font-semibold
                leading-tight
                tracking-[3px]
                text-black
                sm:text-3xl
                lg:text-3xl
              "
            >
              The Best{" "}
              <span className="text-[#f75c1e]">
                Service
              </span>
            </h2>

            <Award
              aria-hidden="true"
              className="
                h-7
                w-7
                shrink-0
                text-[#ed862c]
                sm:h-8
                sm:w-8
              "
              strokeWidth={1.6}
            />
          </div>

          {/* Description */}
          <p
            className="
              mt-7
              max-w-[700px]
              text-[10px]
              leading-7
              text-gray-600
              sm:text-[11px]
              sm:leading-8
            "
          >
            Memories are made of more than just a great place to stay. Your
            very own personal concierge will prepare the home for your arrival,
            greet you in person and share valuable local knowledge to help you
            explore, dine, shop and relax. Whether you need restaurant
            recommendations, transportation, activities or personalised
            itineraries, our concierge team is always available to make every
            stay effortless and memorable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BestService;