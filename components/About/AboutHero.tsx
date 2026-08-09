import Image from "next/image";

const AboutHero = () => {
  return (
    <section
      id="hero"
      aria-labelledby="about-heading"
      className="
        relative
        h-87.5
        w-full
        overflow-hidden
        sm:h-112.5
        lg:h-130
        xl:h-150
      "
    >
      {/* Background Image */}
      <Image
        src="/images/about-hero.png"
        alt="Luxury apartment interior"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/20"
      />

      {/* Hero Content */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          w-full
          items-center
          justify-center
          px-6
          text-center
        "
      >
        <h1
          id="about-heading"
          className="
            text-3xl
            mt-70
            font-semibold
            leading-tight
            tracking-[3px]
            text-white
            sm:text-5xl
            lg:text-5xl
          "
        >
          About Banks L.A.
        </h1>
      </div>
    </section>
  );
};

export default AboutHero;