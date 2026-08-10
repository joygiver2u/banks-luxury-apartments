"use client";

import { useState } from "react";
import { CalendarDays, ChevronDown } from "lucide-react";

import ApartmentSearchModal, {
  Apartment,
} from "./ApartmentSearchModal";

interface LocationSearchProps {
  onSearch?: (searchData: SearchData) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

interface SearchData {
  selectedLocation: string;
  checkInDate: string;
  checkOutDate: string;
  activeFilter: string;
}

const locations = [
  "Lekki",
  "Ikoyi",
  "Ikeja",
];

const filters = [
  "All Locations",
  "Lekki",
  "Ikoyi",
  "Ikeja",
];

const apartmentsByLocation: Record<string, Apartment[]> = {
  Lekki: [
    {
      id: "lekki-1",
      name: "L1",
      location: "Noah's Court",
      image: "/images/apartments/L1.png",
      price: "$",
    },
    {
      id: "lekki-1",
      name: "L2",
      location: "Noah's Court",
      image: "/images/apartments/L2.PNG",
      price: "$",
    },
    {
      id: "lekki-1",
      name: "L3",
      location: "Noah's Court",
      image: "/images/apartments/L3.png",
      price: "$",
    },
    {
      id: "lekki-1",
      name: "L4",
      location: "Noah's Court",
      image: "/images/apartments/L4.png",
      price: "$",
    },
    {
      id: "lekki-1",
      name: "L5",
      location: "Noah's Court",
      image: "/images/apartments/L5.png",
      price: "$",
    },
    {
      id: "lekki-1",
      name: "L6",
      location: "Noah's Court",
      image: "/images/apartments/L6.png",
      price: "$",
    },
    {
      id: "lekki-1",
      name: "L7",
      location: "Noah's Court",
      image: "/images/apartments/L7.png",
      price: "$",
    },
    {
      id: "lekki-1",
      name: "L8",
      location: "Noah's Court",
      image: "/images/apartments/L8.png",
      price: "$",
    },
    {
      id: "lekki-1",
      name: "L9",
      location: "Noah's Court",
      image: "/images/apartments/L9.png",
      price: "$",
    },
  ],

  Ikoyi: [
    {
      id: "ikoyi-1",
      name: "M1",
      location: "2nd Avenue",
      image: "/images/apartments/M1.png",
      price: "$",
    },
    {
      id: "ikoyi-1",
      name: "M2",
      location: "2nd Avenue",
      image: "/images/apartments/M2.png",
      price: "$",
    },
    {
      id: "ikoyi-1",
      name: "M3",
      location: "2nd Avenue",
      image: "/images/apartments/M3.png",
      price: "$",
    },
    {
      id: "ikoyi-1",
      name: "M4",
      location: "2nd Avenue",
      image: "/images/apartments/M4.png",
      price: "$",
    },
    {
      id: "ikoyi-1",
      name: "M5",
      location: "2nd Avenue",
      image: "/images/apartments/M5.png",
      price: "$",
    },
    {
      id: "ikoyi-1",
      name: "M6",
      location: "2nd Avenue",
      image: "/images/apartments/M6.png",
      price: "$",
    },
    {
      id: "ikoyi-1",
      name: "M7",
      location: "2nd Avenue",
      image: "/images/apartments/M7.png",
      price: "$",
    },
    {
      id: "ikoyi-1",
      name: "M8",
      location: "2nd Avenue",
      image: "/images/apartments/M8.png",
      price: "$",
    },
    {
      id: "ikoyi-1",
      name: "M9",
      location: "2nd Avenue",
      image: "/images/apartments/M9.png",
      price: "$",
    },
    {
      id: "temple-1",
      name: "M10",
      location: "Temple Court",
      image: "/images/apartments/M10.png",
      price: "$",
    },
  ],

  Ikeja: [
    {
      id: "ikeja-1",
      name: "K1",
      location: "Acorn Place",
      image: "/images/apartments/N1.png",
      price: "$",
    },
    {
      id: "ikeja-1",
      name: "K2",
      location: "Acorn Place",
      image: "/images/apartments/N2.png",
      price: "$",
    },
    {
      id: "ikeja-1",
      name: "K3",
      location: "Acorn Place",
      image: "/images/apartments/N3.png",
      price: "$",
    },
    {
      id: "ikeja-1",
      name: "K4",
      location: "Acorn Place",
      image: "/images/apartments/N4.png",
      price: "$",
    },
  ],
};

const LocationSearch = ({
  onSearch,
  activeFilter,
  onFilterChange,
}: LocationSearchProps) => {
  const [selectedLocation, setSelectedLocation] =
    useState("");

  const [checkInDate, setCheckInDate] =
    useState("");

  const [checkOutDate, setCheckOutDate] =
    useState("");

  const [message, setMessage] = useState("");
const [messageType, setMessageType] = useState<
  "success" | "error" | ""
>("");
const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchMessage, setSearchMessage] =
  useState("");

  const handleSearch = () => {
  // Validate required fields
  if (!selectedLocation || !checkInDate || !checkOutDate) {
    setSearchMessage(
      "Choose a Check-In and Check-Out date to filter apartment"
    );
    return;
  }

  // Validate that Check-Out is not before Check-In
  if (checkOutDate < checkInDate) {
    setSearchMessage(
      "Check-Out date must be after the Check-In date"
    );
    return;
  }

  // Successful search validation
  setSearchMessage(
    "Minimum stay period is at least three(3) days"
  );

setMessage("");
  setMessageType("");

  // ==========================================
  // 1. CHECK LOCATION
  // ==========================================

  if (!selectedLocation) {
    setMessage(
      "Choose a location to filter apartment"
    );
    setMessageType("error");
    return;
  }

  // ==========================================
  // 2. CHECK DATES
  // ==========================================

  if (!checkInDate || !checkOutDate) {
    setMessage(
      "Choose a Check-In and Check-Out date to filter apartment"
    );
    setMessageType("error");
    return;
  }

  // ==========================================
  // 3. CHECK DATE ORDER
  // ==========================================

  const checkIn = new Date(`${checkInDate}T00:00:00`);
  const checkOut = new Date(`${checkOutDate}T00:00:00`);

  if (checkOut <= checkIn) {
    setMessage(
      "Check-Out date must be after the Check-In date"
    );
    setMessageType("error");
    return;
  }

  // ==========================================
  // 4. CHECK MINIMUM 3-DAY STAY
  // ==========================================

  const differenceInMilliseconds =
    checkOut.getTime() - checkIn.getTime();

  const differenceInDays =
    differenceInMilliseconds /
    (1000 * 60 * 60 * 24);

  if (differenceInDays < 3) {
    setMessage(
      "Minimum stay period is at least three(3) days"
    );
    setMessageType("error");
    return;
  }

  // ==========================================
  // 5. SUCCESS
  // ==========================================

  const searchData: SearchData = {
    selectedLocation,
    checkInDate,
    checkOutDate,
    activeFilter,
  };

  if (onSearch) {
    onSearch(searchData);
  }

  setMessage("");
  setMessageType("");

  setIsModalOpen(true);
};

  return (
    <section
      id="location"
      aria-labelledby="location-search-heading"
      className="w-full bg-[#F75C1E]/10"
    >
      <h2
        id="location-search-heading"
        className="sr-only"
      >
        Apartment Search
      </h2>

      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-8 lg:px-12 lg:py-14">
        {/* =====================================================
            SEARCH FORM
            ===================================================== */}

        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSearch();
          }}
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            lg:grid-cols-4
            lg:items-end
            lg:gap-4
          "
        >
          {/* =================================================
              LOCATION
              ================================================= */}

          <div className="w-full">
            <label
              htmlFor="location"
              className="
                mb-2
                block
                text-sm
                font-medium
                text-gray-800
              "
            >
              Select location
            </label>

            <div className="relative">
              {/* <MapPin
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-4
                  top-1/2
                  h-4
                  w-4
                  -translate-y-1/2
                  text-gray-500
                "
                strokeWidth={1.8}
              /> */}

              <select
                id="location"
                name="location"
                value={selectedLocation}
                onChange={(event) =>
                  setSelectedLocation(event.target.value)
                }
                className="
                  h-12
                  w-full
                  appearance-none
                  border
                  border-gray-200
                  bg-white
                  px-10
                  pr-10
                  text-sm
                  text-gray-800
                  outline-none
                  transition-all
                  duration-300
                  focus:border-[#F75C1E]
                "
              >
                <option value="">
                  Select location
                </option>

                {locations.map((location) => (
                  <option
                    key={location}
                    value={location}
                  >
                    {location}
                  </option>
                ))}
              </select>

              <ChevronDown
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  right-4
                  top-1/2
                  h-4
                  w-4
                  -translate-y-1/2
                  text-[#F75C1E]
                "
                strokeWidth={1.8}
              />
            </div>
          </div>

          {/* =================================================
              CHECK IN
              ================================================= */}

          <div className="w-full">
            <label
              htmlFor="check-in"
              className="
                mb-2
                block
                text-sm
                font-medium
                text-gray-800
              "
            >
              Check In Date
            </label>

            <div className="relative">
              <input
                id="check-in"
                name="check-in"
                type="date"
                value={checkInDate}
                onChange={(event) =>
                  setCheckInDate(event.target.value)
                }
                className="
                    h-12
                    w-full
                    border
                    border-gray-200
                    bg-white
                    px-4
                    py-3
                    pr-12
                    text-sm
                    text-gray-800
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#F75C1E]

                    [&::-webkit-calendar-picker-indicator]:opacity-0
                    [&::-webkit-calendar-picker-indicator]:absolute
                    [&::-webkit-calendar-picker-indicator]:right-0
                    [&::-webkit-calendar-picker-indicator]:h-full
                    [&::-webkit-calendar-picker-indicator]:w-12
                    [&::-webkit-calendar-picker-indicator]:cursor-pointer
                "
              />

              <CalendarDays
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  right-2
                  top-1/2
                  h-4
                  w-4
                  -translate-y-1/2
                  text-[#F75C1E]
                "
                strokeWidth={1.8}
              />
            </div>
          </div>

          {/* =================================================
              CHECK OUT
              ================================================= */}

          <div className="w-full">
            <label
              htmlFor="check-out"
              className="
                mb-2
                block
                text-sm
                font-medium
                text-gray-800
              "
            >
              Check Out Date
            </label>

            <div className="relative">
              <input
                id="check-out"
                name="check-out"
                type="date"
                value={checkOutDate}
                min={checkInDate || undefined}
                onChange={(event) =>
                  setCheckOutDate(event.target.value)
                }
                className="
                    h-12
                    w-full
                    border
                    border-gray-200
                    bg-white
                    px-4
                    text-sm
                    text-gray-800
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#F75C1E]

                    [&::-webkit-calendar-picker-indicator]:opacity-0
                    [&::-webkit-calendar-picker-indicator]:absolute
                    [&::-webkit-calendar-picker-indicator]:right-0
                    [&::-webkit-calendar-picker-indicator]:h-full
                    [&::-webkit-calendar-picker-indicator]:w-12
                    [&::-webkit-calendar-picker-indicator]:cursor-pointer
                "
              />

              <CalendarDays
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  right-4
                  top-1/2
                  h-4
                  w-4
                  -translate-y-1/2
                  text-[#F75C1E]
                "
                strokeWidth={1.8}
              />
            </div>
          </div>

          {/* =================================================
              SEARCH BUTTON
              ================================================= */}

          <div className="w-full">
            <button
              type="submit"
              className="
                h-12
                w-50
                bg-[#F75C1E]
                px-6
                text-sm
                font-semibold
                text-white
                shadow-sm
                outline-none
                transition-all
                cursor-pointer
                duration-300
                hover:bg-[#df4f18]
                hover:shadow-lg
                active:scale-[0.98]
                focus-visible:ring-2
                focus-visible:ring-[#F75C1E]
                focus-visible:ring-offset-2
                lg:w-50
              "
            >
              Find Apartment
            </button>
          </div>
        </form>
        {searchMessage && (
          <p
            role="status"
            aria-live="polite"
            className="
              mt-7
              text-center
              text-sm
              font-medium
              text-[#F75C1E]
              sm:text-base
            "
          >
            {searchMessage}
          </p>
        )}

        {/* =====================================================
            LOCATION FILTER PILLS
            ===================================================== */}
      
        <div
          className="flex flex-wrap gap-3 mt-8"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => onFilterChange(filter)}
                aria-pressed={isActive}
                className={`
                  inline-flex
                  h-11
                  w-fit
                  items-center
                  justify-center
                  whitespace-nowrap
                  rounded-full
                  cursor-pointer
                  px-8
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-[#F75C1E]/10 text-[#F75C1E]"
                      : "border border-[#F75C1E]/40 bg-white text-gray-700 hover:border-gray-200 hover:bg-[#F75C1E]/5 hover:text-[#F75C1E]"
                  }
                `}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {message && (
          <p
            role="alert"
            className={`
              mt-5
              text-center
              text-sm
              font-medium
              ${
                messageType === "error"
                  ? "text-[#F75C1E]"
                  : "text-green-600"
              }
            `}
          >
            {message}
          </p>
        )}
      </div>

      {/* =====================================================
          APARTMENT SEARCH RESULTS MODAL
          ===================================================== */}

      <ApartmentSearchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        location={selectedLocation}
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        apartments={
          apartmentsByLocation[selectedLocation] ?? []
        }
      />
    </section>
  );
};

export default LocationSearch;