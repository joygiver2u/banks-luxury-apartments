"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import LocationSearch from "@/components/location/LocationSearch";
import FeaturedOne from "@/components/location/FeaturedOne";
import FeaturedTwo from "@/components/location/FeaturedTwo";
import FeaturedThree from "@/components/location/FeaturedThree";
import FeaturedFour from "@/components/location/FeaturedFour";
import FeaturedFive from "@/components/location/FeaturedFive";

export default function LocationPageContent() {
  const searchParams = useSearchParams();

  const locationFromSearch = searchParams.get("location");
  const checkInDate = searchParams.get("checkIn");
  const checkOutDate = searchParams.get("checkOut");

  const validLocations = [
    "Lekki",
    "Ikoyi",
    "Ikeja",
  ];

  const initialLocation =
    locationFromSearch &&
    validLocations.includes(locationFromSearch)
      ? locationFromSearch
      : "All Locations";

  const [activeFilter, setActiveFilter] =
    useState(initialLocation);

  /*
   * Update the active location when a new search
   * comes into the Location page.
   */
  useEffect(() => {
    if (
      locationFromSearch &&
      validLocations.includes(locationFromSearch)
    ) {
      setActiveFilter(locationFromSearch);
    }
  }, [locationFromSearch]);

  /*
   * The selected search dates are now available here.
   *
   * They can later be passed to your existing
   * ApartmentSearchModal / apartment components
   * when needed.
   */
  console.log({
    location: locationFromSearch,
    checkInDate,
    checkOutDate,
  });

  return (
    <main>
      {/* Location Search / Filter */}
        <LocationSearch
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
        />

      {/* Featured Properties */}
      {activeFilter === "All Locations" && (
        <>
          <FeaturedOne />
          <FeaturedTwo />
          <FeaturedThree />
          <FeaturedFour />
          <FeaturedFive />
        </>
      )}

      {activeFilter === "Ikoyi" && (
        <FeaturedTwo />
      )}

      {activeFilter === "Lekki" && (
        <FeaturedThree />
      )}

      {activeFilter === "Ikeja" && (
        <FeaturedFive />
      )}
    </main>
  );
}