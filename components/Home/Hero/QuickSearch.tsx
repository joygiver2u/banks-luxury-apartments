"use client";

import {
  CalendarDays,
  ChevronDown,
  Zap,
} from "lucide-react";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

interface DateFieldProps {
  id: string;
  label: string;
  value: string;
  min?: string;
  onChange: (value: string) => void;
  onOpen?: () => void;
  hasError?: boolean;
}

const DateField = ({
  id,
  label,
  value,
  min,
  onChange,
  hasError = false,
}: DateFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const openDatePicker = () => {
    if (inputRef.current?.showPicker) {
      inputRef.current.showPicker();
    } else {
      inputRef.current?.focus();
    }
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="
          mb-2
          block
          text-sm
          font-medium
          text-[#222222]
        "
      >
        {label}
      </label>

      <div className="relative">
        <input
          ref={inputRef}
          id={id}
          name={id}
          type="date"
          value={value}
          min={min}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={hasError}
          className="
            h-[50px]
            w-full
            min-w-0
            appearance-none
            border-0
            bg-white
            px-3
            pr-12
            text-sm
            text-[#222222]
            outline-none
            ring-1
            ring-transparent
            transition

            [&::-webkit-calendar-picker-indicator]:opacity-0
            [&::-webkit-calendar-picker-indicator]:cursor-pointer

            sm:px-4
            sm:pr-12
          "
        />

        <button
          type="button"
          onClick={openDatePicker}
          aria-label={`Select ${label}`}
          className="
            absolute
            right-3
            top-1/2
            flex
            h-8
            w-8
            -translate-y-1/2
            items-center
            justify-center
            text-[#F4512A]
            transition-colors
            hover:text-[#E5421F]
            focus:outline-none
            sm:right-4
          "
        >
          <CalendarDays
            size={18}
            strokeWidth={2}
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
};

const QuickSearch = () => {
  const router = useRouter();

  const [location, setLocation] = useState("Lekki");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [error, setError] = useState("");

  /*
   * =====================================================
   * TODAY'S DATE
   * =====================================================
   */

  const today = new Date();
  const todayString = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  /*
   * =====================================================
   * CHECK-OUT MINIMUM
   * =====================================================
   *
   * Once a check-in date is selected, the check-out
   * cannot be earlier than the check-in date.
   */

  const checkOutMin = checkIn || todayString;

  /*
   * =====================================================
   * FORM SUBMISSION
   * =====================================================
   */

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");

    /*
     * -----------------------------------------------------
     * 1. LOCATION VALIDATION
     * -----------------------------------------------------
     */

    if (!location) {
      setError("Please select a location.");
      return;
    }

    /*
     * -----------------------------------------------------
     * 2. DATE VALIDATION
     * -----------------------------------------------------
     */

    if (!checkIn || !checkOut) {
      setError(
        "Please select both check-in and check-out dates."
      );
      return;
    }

    /*
     * -----------------------------------------------------
     * 3. DATE CONVERSION
     * -----------------------------------------------------
     *
     * Using local midnight avoids unexpected timezone
     * differences when calculating the number of nights.
     */

    const checkInDate = new Date(
      `${checkIn}T00:00:00`
    );

    const checkOutDate = new Date(
      `${checkOut}T00:00:00`
    );

    /*
     * -----------------------------------------------------
     * 4. INVALID DATE CHECK
     * -----------------------------------------------------
     */

    if (
      Number.isNaN(checkInDate.getTime()) ||
      Number.isNaN(checkOutDate.getTime())
    ) {
      setError("Please select valid check-in and check-out dates.");
      return;
    }

    /*
     * -----------------------------------------------------
     * 5. CHECK-OUT MUST BE AFTER CHECK-IN
     * -----------------------------------------------------
     */

    if (checkOutDate <= checkInDate) {
      setError(
        "Check-out date must be later than the check-in date."
      );
      return;
    }

    /*
     * -----------------------------------------------------
     * 6. MINIMUM THREE-NIGHT STAY
     * -----------------------------------------------------
     */

    const millisecondsPerDay =
      1000 * 60 * 60 * 24;

    const numberOfNights = Math.round(
      (checkOutDate.getTime() -
        checkInDate.getTime()) /
        millisecondsPerDay
    );

    if (numberOfNights < 3) {
      setError(
        "Minimum stay period is at least three (3) days"
      );
      return;
    }

    /*
     * -----------------------------------------------------
     * 7. VALID SEARCH
     * -----------------------------------------------------
     */

    const params = new URLSearchParams({
      location,
      checkIn,
      checkOut,
    });

    /*
     * Navigate to the existing Location page while
     * carrying the search information in the URL.
     */

    router.push(
      `/locations?${params.toString()}`
    );
  };

  return (
    <div
      className="
        relative
        z-20
        mx-auto
        w-[90%]
        sm:w-[88%]
        lg:absolute
        lg:bottom-[-10px]
        lg:left-1/2
        lg:w-[90%]
        lg:max-w-[1200px]
        lg:-translate-x-1/2
      "
    >
      <form
        onSubmit={handleSubmit}
        className="
          bg-[#FDF2ED]
          p-5
          shadow-xl
          sm:p-6
          lg:p-8
        "
      >
        {/* Card Title */}
        <div className="mb-6 flex items-center gap-1.5">
          <h2
            className="
              text-xl
              font-semibold
              text-[#F4512A]
              sm:text-2xl
            "
          >
            Quick Search
          </h2>

          <Zap
            size={21}
            strokeWidth={2.5}
            className="fill-[#F4512A] text-[#F4512A]"
            aria-hidden="true"
          />
        </div>

        {/* =====================================================
            ERROR MESSAGE
            ===================================================== */}

        {error && (
          <div
            role="alert"
            aria-live="polite"
            className="
              mb-5
              text-sm
              font-medium
              text-[#F4512A]
            "
          >
            {error}
          </div>
        )}

        {/* Search Fields */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {/* Location */}
          <div className="lg:col-span-1">
            <label
              htmlFor="location"
              className="
                mb-2
                block
                text-sm
                font-medium
                text-[#222222]
              "
            >
              Select location
            </label>

            <div className="relative">
              <select
                id="location"
                name="location"
                value={location}
                onChange={(event) => {
                  setLocation(event.target.value);
                  setError("");
                }}
                className="
                  h-[50px]
                  w-full
                  appearance-none
                  rounded-none
                  border-0
                  bg-white
                  px-4
                  pr-10
                  text-sm
                  text-[#555555]
                  outline-none
                  ring-1
                  ring-transparent
                  transition
                  focus:ring-2
                "
              >
                <option value="Lekki">Lekki</option>
                <option value="Ikoyi">Ikoyi</option>
                <option value="Ikeja">Ikeja</option>
              </select>

              <ChevronDown
                size={16}
                strokeWidth={2}
                className="
                  pointer-events-none
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-[#F4512A]
                "
                aria-hidden="true"
              />
            </div>
          </div>

          <div
            className="
              grid
              grid-cols-2
              gap-4
              lg:col-span-2
              lg:gap-6
            "
          >
            {/* Check In */}
            <DateField
              id="check-in"
              label="Check In Date"
              value={checkIn}
              min={todayString}
              onChange={(value) => {
                setCheckIn(value);
                setError("");

                /*
                 * If the existing check-out is now before
                 * the newly selected check-in, clear it.
                 */
                if (checkOut && value > checkOut) {
                  setCheckOut("");
                }
              }}
              hasError={!!error}
            />

            {/* Check Out */}
            <DateField
              id="check-out"
              label="Check Out Date"
              value={checkOut}
              min={checkOutMin}
              onChange={(value) => {
                setCheckOut(value);
                setError("");
              }}
              hasError={!!error}
            />
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="
                h-[50px]
                w-full
                cursor-pointer
                rounded-sm
                bg-[#F4512A]
                px-6
                text-sm
                font-medium
                text-white
                transition-colors
                hover:bg-[#E5421F]
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
              "
            >
              Find Apartment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuickSearch;