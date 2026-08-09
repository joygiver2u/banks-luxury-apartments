const values = [
  {
    title: "Comfort",
    description:
      'Comfort is a necessary ingredient of luxury. We try to represent this as much as possible in our approach. To our select clientele, we have an utmost focus on comfortability as a core element in the delivery of our services as we believe luxury speaks "comfort".',
  },
  {
    title: "Aesthetics",
    description:
      "What is comfort and luxury without the look and feel of it? All our apartments don’t just offer that top-notch feeling of comfortability but also the look and feel of style and elegance merged into a homely setting. We provide you with that feeling of ambience and style with our apartments down to the tiniest detail.",
  },
  {
    title: "Grandeur",
    description:
      "Banks L.A. seeks to serve and satisfy the need of our high-value customers and it is only right we match their elite taste while exceeding it at the same time. Our structures satisfy our client's needs for luxury with a blend of 21st-century architectural home designs.",
  },
];

const LuxuryValues = () => {
  return (
    <section
      aria-labelledby="luxury-values-heading"
      className="
        bg-white
        px-5
        py-20
        sm:px-6
        sm:py-6
        lg:px-8
        lg:py-8
      "
    >
      <h2 id="luxury-values-heading" className="sr-only">
        Our Values
      </h2>

      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          gap-14
          md:grid-cols-3
          md:gap-10
          lg:gap-16
        "
      >
        {values.map((value) => (
          <article key={value.title}>
            <h3
              className="
                text-3xl
                font-medium
                leading-tight
                tracking-tight
                text-[#111111]
                sm:text-4xl
                lg:text-[35px]
              "
            >
              {value.title}
            </h3>

            <p
              className="
                mt-6
                max-w-full
                text-[15px]
                font-normal
                leading-7
                text-[#666666]
                sm:text-base
                sm:leading-8
                lg:text-[13px]
              "
            >
              {value.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default LuxuryValues;