import Image from "next/image";

const ListPropertyHero = () => {
  return (
    <section
      id="apply-section"
      aria-labelledby="list-property-heading"
      className="
        relative
        h-[400px]
        w-full
        overflow-hidden
        sm:h-[440px]
        md:h-[480px]
        lg:h-[400px]
        xl:h-[500px]
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
          ===================================================== */}
      <Image
        src="/images/property-hero.png"
        alt="Luxury apartment available for long-term stays"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* =====================================================
          DARK OVERLAY
          ===================================================== */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/35"
      />

      {/* =====================================================
          CONTENT
          ===================================================== */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          w-full
          items-end
          py-30
          px-6
          pb-10
          sm:px-8
          sm:pb-12
          md:px-10
          md:pb-14
          lg:items-center
          lg:justify-end
          lg:px-16
          lg:pb-0
          xl:px-24
        "
      >
        <div
          className="
            w-full
            max-w-xl
            text-left
            text-white
            lg:max-w-[560px]
            xl:max-w-[600px]
          "
        >
          {/* Heading */}
          <h1
            id="list-property-heading"
            className="
              text-3xl
              font-bold
              leading-[1.05]
              tracking-tight
              sm:text-[42px]
              md:text-4xl
              lg:text-5xl
            "
          >
            List your{" "}
            <span className="text-[#F75C1E]">
              home
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-[600px]
              text-sm
              leading-6
              text-white/90
              sm:mt-6
              sm:text-base
              sm:leading-7
              lg:mt-7
              lg:text-[15px]
              lg:leading-7
          "
          >
            Renting your property via Banks L.A. and looking for longer
            stays? Connect your Banks L.A. listing to Stay Longer and we'll
            advertise your home across our listing platforms as well as
            through our corporate partners to help you improve your
            occupancy. Retain control of your Banks L.A. listing, leave us
            to market, and lease your home for longer-term stays. Get in
            touch for more information on our criteria to list your home
            for longer stays.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ListPropertyHero;