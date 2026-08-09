import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Property {
  name: string;
  image: string;
  alt: string;
}

const properties: Property[] = [
  {
    name: "Noah's Court",
    image: "/images/noahs-court.png",
    alt: "Noah's Court property exterior",
  },
  {
    name: "2nd Avenue",
    image: "/images/2nd-avenue.png",
    alt: "2nd Avenue property swimming pool",
  },
  {
    name: "Temple Road",
    image: "/images/temple-road.png",
    alt: "Temple Road luxury apartment exterior",
  },
];

const acornPlace: Property = {
  name: "Acorn Place",
  image: "/images/acorn-place.png",
  alt: "Acorn Place luxury apartment living room",
};

const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <article className="w-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
            src={property.image}
          alt={property.alt}
          fill
          sizes="
            (max-width: 767px) 100vw,
            (max-width: 1279px) 30vw,
            28vw
          "
          className="object-cover h-50"
        />
      </div>

      <h3
        className="
          mt-4
          text-center
          text-base
          font-medium
          tracking-tight
          text-[#111111]
          sm:text-lg
        "
      >
        {property.name}
      </h3>
    </article>
  );
};

const PropertyLocations = () => {
  return (
    <section
      aria-labelledby="property-locations-heading"
      className="
        bg-[#FDF2ED]
        px-5
        py-20
        sm:px-6
        sm:py-24
        lg:px-8
        lg:py-32
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* =========================================
            SECTION HEADING
            Visually hidden because the reference
            does not require a visible section title.
        ========================================== */}
        <h2 id="property-locations-heading" className="sr-only">
          Property Locations
        </h2>

        {/* =========================================
            TOP PROPERTY ROW
        ========================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-12
            md:grid-cols-3
            md:gap-8
            lg:gap-12
          "
        >
          {properties.map((property) => (
            <PropertyCard
              key={property.name}
              property={property}
            />
          ))}
        </div>

        {/* =========================================
            LOWER CONTENT ROW
        ========================================== */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-14
            md:mt-16
            md:grid-cols-3
            md:gap-8
            lg:mt-20
            lg:gap-12
          "
        >
          {/* Acorn Place */}
          <PropertyCard property={acornPlace} />

          {/* =========================================
              BECOME A HOST
          ========================================== */}
            <div
                className="
                    relative
                    aspect-[4/3]
                    w-full
                    h-90
                    overflow-hidden
                "
                >
                <Image
                    src="/images/become-a-host.png"
                    alt="Luxury apartment interior"
                    fill
                    sizes="
                    (max-width: 767px) 100vw,
                    (max-width: 1279px) 30vw,
                    28vw
                    "
                    className="object-cover"
                />

                {/* Dark overlay */}
                <div
                    className="
                    absolute
                    inset-0
                    bg-black/50
                    "
                    aria-hidden="true"
                />

                    {/* Host content */}
                <div
                    className="
                    absolute
                    inset-0
                    z-10
                    flex
                    flex-col
                    items-center
                    justify-center
                    px-5
                    text-center
                    "
                    >
                    <h3
                        className="
                            text-2xl
                            font-medium
                            leading-tight
                            text-white
                            sm:text-3xl
                        "
                        >
                        Become a Host
                    </h3>

                    <Link
                        href="/list-your-property"
                        className="
                            group
                            mt-6
                            inline-flex
                            items-center
                            gap-2
                            bg-[#F45A22]
                            px-6
                            py-3
                            text-sm
                            font-medium
                            text-white
                            transition-colors
                            duration-300
                            hover:bg-[#E84D1A]
                            focus:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-white
                            focus-visible:ring-offset-2
                            focus-visible:ring-offset-black
                        "
                        >
                        <span>Apply Now</span>
                    </Link>
                </div>
            </div>

          {/* =========================================
              BRAND CONTENT
          ========================================== */}
          <div
            className="
              flex
              flex-col
              items-start
              justify-start
              pt-0
              lg:pt-15
            "
          >
            <h3
              className="
                max-w-sm
                text-3xl
                font-medium
                leading-tight
                tracking-tight
                text-[#111111]
                sm:text-4xl
                lg:text-[40px]
                lg:leading-[1.15]
              "
            >
              The brand you can{" "}
              <span className="text-[#F45A22]">
                trust
              </span>
            </h3>

            <p
              className="
                mt-6
                max-w-md
                text-[15px]
                font-normal
                leading-7
                text-[#666666]
                sm:text-base
                sm:leading-8
              "
            >
              With over 8 years of experience in the property
              market and industry we are dedicated to
              exceptionalism in our designs, constructions,
              and finishing in all our properties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyLocations;