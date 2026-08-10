import QuickSearch from "./QuickSearch";

const Hero = () => {
  return (
    <section id="hero" className="relative lg:pb-[70px]">
      {/* Hero Banner */}
      <div
        className="
          relative
          flex
          h-[65vh]
          min-h-[500px]
          items-center
          justify-center
          overflow-hidden
          sm:h-[70vh]
          lg:h-[80vh]
        "
      >
        {/* Background Video */}
        <video
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

        {/* Hero Content */}
        <div className="relative z-10  mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-6 text-center text-white sm:px-8">
          <h1
            id="hero-heading"
            className="
              text-3xl
              font-bold
              uppercase
              leading-[1.2]
              tracking-wide
              sm:text-4xl
              lg:text-5xl
            "
          >
            <span className="block">Banks Luxury</span>

            <span className="mt-2 block">Serviced Apartments</span>
          </h1>

          <p
            className="
              mt-6
              max-w-[600px]
              text-sm
              font-medium
              leading-relaxed
              text-white
              sm:text-base
              lg:text-lg
            "
          >
            Banks L.A. offers a selection of spacious and convenient properties
            which are perfect for occupants seeking the best living conditions
            in the city.
          </p>
        </div>
      </div>
      <QuickSearch />
    </section>
  );
};

export default Hero;
