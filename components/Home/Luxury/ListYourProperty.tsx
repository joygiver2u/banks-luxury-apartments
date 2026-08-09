import Image from "next/image";
import { ArrowRight } from "lucide-react";



const ListYourProperty = () => {
  return (
    <section
      aria-labelledby="list-your-property-heading"
      className="
        bg-white
        px-5
        py-20
        sm:px-6
        sm:py-24
        lg:px-8
        lg:py-32
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          gap-16
          lg:grid-cols-[0.9fr_1.1fr]
          lg:items-start
          lg:gap-12
        "
      >
        {/* =========================================
            IMAGE COLLAGE
            Mobile: first
            Desktop: right
        ========================================== */}
        <div
          className="
            relative
            order-1
            mx-auto
            h-[390px]
            w-full
            max-w-[620px]
            sm:h-[450px]
            lg:order-2
            lg:h-[560px]
          "
        >
          {/* Top-left image */}
          <div
            className="
              absolute
              left-0
              top-0
              z-10
              h-[190px]
              w-[50%]
              sm:h-[240px]
              lg:h-[300px]
            "
          >
            <Image
              src="/images/property-1.png"
              alt="Luxury apartment interior"
              fill
              sizes="
                (max-width: 639px) 57vw,
                (max-width: 1023px) 57vw,
                32vw
              "
              className="object-cover"
            />
          </div>

          {/* Top-right image */}
          <div
            className="
              absolute
              right-0
              top-[55px]
              z-0
              h-[190px]
              w-[50%]
              sm:top-[70px]
              sm:h-[240px]
              lg:top-[85px]
              lg:h-[300px]
            "
          >
            <Image
              src="/images/property-2.png"
              alt="Luxury serviced apartment room"
              fill
              sizes="
                (max-width: 639px) 57vw,
                (max-width: 1023px) 57vw,
                32vw
              "
              className="object-cover"
            />
          </div>

          {/* Foreground sofa image */}
          <div
            className="
              absolute
              bottom-0
              left-1/2
              z-20
              h-[205px]
              w-[68%]
              -translate-x-1/2
              sm:h-[255px]
              lg:h-[325px]
              lg:w-[50%]
            "
          >
            <Image
              src="/images/property-3.png"
              alt="Luxury apartment lounge area"
              fill
              sizes="
                (max-width: 639px) 68vw,
                (max-width: 1023px) 68vw,
                38vw
              "
              className="object-cover"
            />
          </div>
        </div>

        {/* =========================================
            TEXT CONTENT
            Mobile: below collage
            Desktop: left
        ========================================== */}
        <div
          className="
            order-2
            flex
            flex-col
            items-start
            pt-0
            lg:order-1
            lg:pt-5
          "
        >
          {/* Heading */}
          <h2
            id="list-your-property-heading"
            className="
              text-3xl
              font-medium
              leading-tight
              tracking-tight
              text-[#111111]
              sm:text-4xl
              lg:text-[35px]
              lg:leading-[1.15]
            "
          >
            List your{" "}
            <span className="text-[#F45A22]">
              Property
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-7
              max-w-full
              text-[15px]
              font-normal
              leading-7
              text-[#666666]
              sm:text-base
              sm:leading-8
              lg:max-w-xl
            "
          >
            If you love to travel (or live overseas or interstate)
            and would prefer to have your home taken care of whilst
            you are away, there is no better way than listing your
            home through Banks L.A. Your very own property concierge
            will take care of your property, greet your guests, and
            remain on-call during their stay.
          </p>

          {/* CTA */}
          <a
            href="/list-your-property"
            className="
              group
              mt-9
              inline-flex
              items-stretch
              overflow-hidden
              rounded-md
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#F45A22]
              focus-visible:ring-offset-2
            "
          >
            {/* Apply Now */}
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
                group-hover:bg-[#E84D1A]
              "
            >
              Apply Now
            </span>

            {/* Arrow */}
            <span
              className="
                flex
                min-w-[52px]
                items-center
                justify-center
                border
                border-[#F45A22]
                bg-white
                text-[#F45A22]
                transition-colors
                duration-300
                group-hover:bg-[#FFF5F1]
              "
            >
              <ArrowRight
                size={22}
                strokeWidth={1.5}
                aria-hidden="true"
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ListYourProperty;