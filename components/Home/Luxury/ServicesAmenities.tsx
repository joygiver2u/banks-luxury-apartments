import Image from "next/image";
import {
  BrushCleaning,
  CarFront,
  Dumbbell,
  Waves,
  Wifi,
  Zap,
} from "lucide-react";

import AmenityCard from "./AmenityCard";

const amenities = [
  {
    label: "Swimming Pool",
    icon: Waves,
  },
  {
    label: "Gym",
    icon: Dumbbell,
  },
  {
    label: "Free WiFi",
    icon: Wifi,
  },
  {
    label: "24/7 Power Supply",
    icon: Zap,
  },
  {
    label: "Housekeeping",
    icon: BrushCleaning,
  },
  {
    label: "Parking",
    icon: CarFront,
  },
];

const ServicesAmenities = () => {
  return (
    <section
      aria-labelledby="services-amenities-heading"
      className="
        relative
        h-[720px]
        w-full
        overflow-hidden
        sm:h-[600px]
        lg:h-[650px]
      "
    >
      {/* Background Image */}
      <Image
        src="/images/swimming-pool.png"
        alt="Luxury swimming pool at Banks Luxury Serviced Apartments"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority={false}
      />

      {/* Dark Background Overlay */}
      <div
        className="
          absolute
          inset-0
        "
        aria-hidden="true"
      />

      {/* Content Overlay */}
      <div
        className="
          absolute
          left-4
          right-4
          top-12
          bottom-auto
          w-auto
          bg-black/70
          p-7
          backdrop-blur-sm
          sm:left-8
          sm:right-8
          sm:top-1/2
          sm:bottom-auto
          sm:w-[58%]
          sm:-translate-y-1/2
          sm:p-9
          lg:left-12
          lg:right-auto
          lg:w-[40%]
          lg:max-w-[560px]
          lg:p-10
        "
      >
        {/* Heading */}
        <h2
          id="services-amenities-heading"
          className="
            text-3xl
            font-semibold
            leading-tight
            text-white
            sm:text-3xl
            lg:text-4xl
          "
        >
          Services and Amenities
        </h2>

        {/* Amenities */}
        <div
          className="
            mt-10
            grid
            grid-cols-3
            gap-x-4
            gap-y-8
            sm:mt-12
            sm:gap-x-6
            sm:gap-y-10
            lg:mt-12
            lg:gap-x-8
            lg:gap-y-10
          "
        >
          {amenities.map((amenity) => (
            <AmenityCard
              key={amenity.label}
              label={amenity.label}
              icon={amenity.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAmenities;