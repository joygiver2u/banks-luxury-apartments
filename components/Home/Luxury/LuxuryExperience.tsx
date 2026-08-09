import Image from "next/image";
import { ArrowRight } from "lucide-react";

const LuxuryExperience = () => {
  return (
    <section
      aria-labelledby="luxury-experience-heading"
      className="
        bg-white
        px-5
        py-14
        sm:px-6
        sm:py-16
        lg:px-8
        lg:py-24
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          gap-10
          lg:grid-cols-2
          lg:gap-16
        "
      >
        {/* FEATURE IMAGE */}
        <div className="relative w-full overflow-hidden">
          <Image
            src="/images/luxury.jpg"
            alt="Luxury Banks serviced apartment living room"
            width={900}
            height={700}
            className="
              h-150
              w-full
              object-cover
            "
            sizes="
              (max-width: 1023px) 100vw,
              50vw
            "
          />
        </div>

        {/* TEXT CONTENT*/}
        <div
          className="
            flex
            h-full
            flex-col
            justify-center
            items-start
          "
        >
          {/* Heading */}
          <h2
            id="luxury-experience-heading"
            className="
              text-3xl
              font-semibold
              leading-snug
              text-[#111111]
              sm:text-4xl
              lg:text-4xl
              lg:leading-tight
            "
          >
            Enjoy the{" "}
            <span className="text-[#F45A22]">
              luxury
            </span>{" "}
            experience at any of our locations
          </h2>

          {/* Paragraphs */}
          <div
            className="
              mt-8
              max-w-full
              space-y-6
              text-[13px]
              leading-7
              text-[#666666]
              lg:max-w-lg
              lg:leading-8
            "
          >
            <p>
              Banks L.A. exclusively manages the best handpicked
              and home-grown holiday apartments across several
              destinations (and counting). Just 1 in 10 properties
              that apply make the Banks L.A. list. If they are not
              beautifully furnished, filled with character and in a
              great location, you will not find them here.
            </p>

            <p>
              Provisioned to five-star standards by your very own
              concierge, with all the extra touches, you are assured
              of more than just a home stay. Whether you stay for
              2 nights or 2 weeks, Banks L.A. service is designed
              to make short stays more than just a holiday.
            </p>
          </div>

          {/* CTA */}
          <a
            href="/about"
            className="
              group
              mt-8
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
            {/* About Us */}
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
              About Us
            </span>

            {/* Arrow */}
            <span
              className="
                flex
                min-w-[50px]
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
    </section>
  );
};

export default LuxuryExperience;