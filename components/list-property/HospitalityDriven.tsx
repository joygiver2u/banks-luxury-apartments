import Image from "next/image";

const HospitalityDriven = () => {
  return (
    <section
      aria-labelledby="hospitality-heading"
      className="w-full bg-white"
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          items-center
          gap-12
          px-6
          py-20
          md:px-8
          md:py-24
          lg:grid-cols-2
          lg:gap-16
          lg:px-12
          lg:py-28
        "
      >
        {/* =====================================================
            LEFT — IMAGE
            ===================================================== */}
        <div
          className="
            relative
            w-full
            overflow-hidden
            shadow-lg
            transition-all
            duration-500
            ease-out
          "
        >
          <div className="relative aspect-4/3 w-full">
            <Image
              src="/images/hospitality-driven.png"
              alt="Elegant Banks L.A. luxury apartment interior"
              fill
              sizes="
                (max-width: 500px) 100vw,
                (max-width: 800px) 50vw,
                45vw
              "
              className="object-cover"
            />
          </div>
        </div>

        {/* =====================================================
            RIGHT — CONTENT
            ===================================================== */}
        <div
          className="
            flex
            flex-col
            justify-center
            lg:pl-2
            mt-8
          "
        >
          <h2
            id="hospitality-heading"
            className="
              text-2xl
              font-lighter
              leading-tight
              tracking-tight
              text-black
              sm:text-3xl
              lg:text-4xl
            "
          >
            We are{" "}
            <span className="text-[#F75C1E]">
              hospitality driven
            </span>
          </h2>

          <div
            className="
              mt-6
              max-w-[650px]
              space-y-5
              text-[12px]
              leading-4
              text-gray-500
              sm:mt-7
              sm:text-[12px]
              sm:leading-5
              lg:mt-8
            "
          >
            <p>
              Banks L.A.&apos;s business philosophy is hospitality driven—
              luxury without the snobbery. We believe exceptional service
              begins with sincerity, openness, and professionalism. Whether
              you&apos;re a guest or a property owner, every interaction
              should feel welcoming, rewarding, and effortless. Our
              experienced team works tirelessly to generate quality bookings
              while showcasing your property to discerning travellers through
              our exclusive hospitality network.
            </p>

            <p>
              We represent a carefully selected portfolio of homes ranging
              from stylish city apartments to expansive luxury residences.
              Every property is expected to meet our high standards of
              comfort, design, cleanliness, and location. For homeowners who
              want to earn income without managing every detail, Banks L.A.
              delivers a premium hospitality experience backed by expert
              marketing, guest relations, and property support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalityDriven;