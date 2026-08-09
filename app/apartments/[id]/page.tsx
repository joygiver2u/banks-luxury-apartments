import Link from "next/link";
import { notFound } from "next/navigation";
import ApartmentGallery from "@/components/location/ApartmentGallery";

const apartments = [
  {
    id: "lekki-1",
    name: "M1",
    propertyName: "Apartment Noah's Court",
    location: "Noah's Court",
    bedrooms: 4,
    price: "$",
    minimumStay: 3,

    images: [
      "/images/apartments/L1.png",
      "/images/apartments/L2.png",
      "/images/apartments/L3.png",
      "/images/apartments/L4.png",
      "/images/apartments/L5.png",
      "/images/apartments/L6.png",
      "/images/apartments/L7.png",
      "/images/apartments/L8.png",
      "/images/apartments/L9.png",
    ],

    description:
      "A beautifully furnished luxury apartment designed for comfortable and memorable stays.",
  },

  {
    id: "ikoyi-1",
    name: "M2",
    propertyName: "Apartment 2nd Avenue",
    location: "2nd Avenue",
    bedrooms: 3,
    price: "$",
    minimumStay: 3,

    images: [
      "/images/apartments/M1.png",
      "/images/apartments/M2.png",
      "/images/apartments/M3.png",
      "/images/apartments/M4.png",
      "/images/apartments/M5.png",
      "/images/apartments/M6.png",
      "/images/apartments/M7.png",
      "/images/apartments/M8.png",
      "/images/apartments/M9.png",
      "/images/apartments/M10.png",
    ],

    description:
      "A stylish and comfortable apartment with everything you need for a relaxing stay.",
  },

  {
    id: "temple-1",
    name: "M3",
    propertyName: "Apartment Temple Court",
    location: "Temple Court",
    bedrooms: 2,
    price: "$",
    minimumStay: 3,

    images: [
      "/images/apartments/M9.png",
      "/images/apartments/L2.png",
      "/images/apartments/N4.png",
    ],

    description:
      "A Beautiful apartment experience in a comfortable and carefully designed space.",
  },

  {
    id: "ikeja-1",
    name: "M3",
    propertyName: "Apartment Acorn Place",
    location: "Acorn Place",
    bedrooms: 3,
    price: "$",
    minimumStay: 3,

    images: [
      "/images/apartments/N1.png",
      "/images/apartments/N2.png",
      "/images/apartments/N3.png",
      "/images/apartments/N4.png",
    ],

    description:
      "Enjoy a premium apartment experience in a comfortable and carefully designed space.",
  },
];

export default async function ApartmentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const apartment = apartments.find(
    (item) => item.id === id
  );

  if (!apartment) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">

      {/* =====================================================
          PAGE CONTENT
          ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">

        {/* ===================================================
            APARTMENT TITLE
            =================================================== */}

        <div className="mb-8">
          <p
            className="
              text-sm
              font-medium
              uppercase
              tracking-wider
              text-[#F75C1E]
            "
          >
            {apartment.location}
          </p>

          <h1
            className="
              mt-2
              text-3xl
              font-bold
              tracking-tight
              text-gray-900
              sm:text-4xl
            "
          >
            {apartment.name}
          </h1>
        </div>

        {/* ===================================================
            GALLERY + APARTMENT INFORMATION
            =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-[65%_35%]
            lg:gap-12
          "
        >

          {/* =================================================
              LEFT — IMAGE GALLERY
              ================================================= */}

          <div className="min-w-0">
            <ApartmentGallery
              images={apartment.images}
              apartmentName={apartment.name}
            />
          </div>

          {/* =================================================
              RIGHT — APARTMENT INFORMATION
              ================================================= */}

          <div className="pt-2">

            {/* Apartment Name */}
            <h2
              className="
                text-2xl
                font-semibold
                text-gray-900
                sm:text-3xl
              "
            >
              Apartment {apartment.name}
            </h2>

            {/* Location */}
            <p
              className="
                mt-2
                text-base
                text-gray-500
              "
            >
              {apartment.location}
            </p>

            {/* Description */}
            <p
              className="
                mt-6
                text-base
                leading-7
                text-gray-600
              "
            >
              {apartment.description}
            </p>

            {/* Apartment Features */}
            <div className="mt-8 space-y-4">

              {/* Bedrooms */}
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    bg-[#F75C1E]
                    text-white
                  "
                >
                  🛏
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Bedrooms
                  </p>

                  <p className="font-medium text-gray-900">
                    4 Bedroom
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    bg-[#F75C1E]
                    text-white
                  "
                >
                  $
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Price
                  </p>

                  <p className="font-medium text-gray-900">
                    $ per night
                  </p>
                </div>
              </div>

              {/* Minimum Stay */}
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    bg-[#F75C1E]
                    text-white
                  "
                >
                  ◷
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Minimum Stay
                  </p>

                  <p className="font-medium text-gray-900">
                    2 days
                  </p>
                </div>
              </div>

            </div>

            {/* =================================================
                BOOK APARTMENT BUTTON
                ================================================= */}

            <div className="mt-10">

              <Link
                href="/booking"
                className="
                  inline-flex
                  items-center
                  justify-center
                  bg-[#F75C1E]
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#df4f18]
                  hover:shadow-lg
                "
              >
                Book Apartment
              </Link>

            </div>

            {/* =================================================
                CONTACT
                ================================================= */}

            <div className="mt-10">

              <h3
                className="
                  text-lg
                  font-medium
                  text-gray-900
                "
              >
                Contact
              </h3>

              <a
                href="tel:+2347048248091"
                className="
                  mt-3
                  inline-flex
                  bg-[#F75C1E]/10
                  px-4
                  py-2.5
                  text-sm
                  text-[#F75C1E]
                  transition-colors
                  hover:bg-[#F75C1E]/20
                "
              >
                +234 704 824 8091
              </a>

            </div>

            {/* =================================================
                MAKE ENQUIRY
                ================================================= */}

            <div className="mt-6">

              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  border
                  border-gray-900
                  px-7
                  py-3.5
                  text-sm
                  font-medium
                  text-gray-900
                  transition-all
                  duration-300
                  hover:border-[#F75C1E]
                  hover:bg-white
                  hover:text-[#F75C1E]
                "
              >
                Make Enquiry
              </Link>

            </div>

          </div>

        </div>

        {/* ===================================================
            BACK TO APARTMENTS
            =================================================== */}

        <div className="mt-14">

          <Link
            href="/locations"
            className="
              inline-flex
              items-center
              justify-center
              border
              border-[#F75C1E]
              px-7
              py-3.5
              text-sm
              font-semibold
              text-[#F75C1E]
              transition-all
              duration-300
              hover:bg-[#F75C1E]
              hover:text-white
            "
          >
            Back to Apartments
          </Link>

        </div>

      </section>

    </main>
  );
}