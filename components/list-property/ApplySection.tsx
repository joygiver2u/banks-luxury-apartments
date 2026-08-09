"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";

interface FormData {
  location: string;
  companyName: string;
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  location?: string;
  name?: string;
  email?: string;
  message?: string;
}

const locations = [
  "Lagos",
  "Port-Harcourt",
  "Abuja",
  "Ibadan",
  "Benin",
];

const initialFormData: FormData = {
  location: "",
  companyName: "",
  name: "",
  email: "",
  message: "",
};

const ApplySection = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Remove the error as soon as the user corrects the field.
    setErrors((previous) => ({
      ...previous,
      [name]: undefined,
    }));

    setIsSubmitted(false);
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.location) {
      newErrors.location = "Please choose a location.";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    }

    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    // Connect your backend/API/email service here.
    console.log("Application submitted:", formData);
  };

  return (
    <section
      aria-labelledby="apply-heading"
      className="w-full bg-white"
    >
      {/* =====================================================
          BACKGROUND BANNER + HEADING
          ===================================================== */}
      <div
        className="
          relative
          h-[450px]
          w-full
          overflow-visible
          sm:h-[400px]
          lg:h-[700px]
        "
      >
        {/* Background Image */}
        <Image
          src="/images/apply-bg.png"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/30"
        />

        {/* Heading */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            w-full
            max-w-7xl
            items-start
            px-6
            pt-14
            md:px-8
            md:pt-16
            lg:px-12
            lg:pt-20
          "
        >
          <h2
            id="apply-heading"
            className="
              text-3xl
              font-light
              leading-tight
              tracking-tight
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Apply Here
          </h2>
        </div>
      </div>

      {/* =====================================================
          APPLICATION CARD
          ===================================================== */}
      <div
        className="
          relative
          z-20
          mx-auto
          -mt-92
          w-full
          max-w-7xl
          px-4
          pb-20
          sm:-mt-24
          sm:px-6
          sm:pb-24
          md:px-8
          lg:-mt-120
          lg:px-12
          lg:pb-28
        "
      >
        <div
          className="
            w-full
            max-w-260
            bg-white
            p-6
            shadow-2xl
            sm:p-8
            md:p-10
            lg:p-12
          "
        >
          {/* =================================================
              FORM
              ================================================= */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="w-full"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-gray-900
                  "
                >
                  Select Location
                  <span
                    aria-hidden="true"
                    className="ml-1 text-[#F75C1E]"
                  >
                    *
                  </span>
                </label>

                <div className="relative">
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.location)}
                    aria-describedby={
                      errors.location
                        ? "location-error"
                        : undefined
                    }
                    className={`
                      h-12
                      w-full
                      appearance-none
                      border-0
                      bg-[#F75C1E]/8
                      px-4
                      pr-10
                      text-sm
                      text-gray-900
                      outline-none
                      $
                    `}
                  >
                    <option value="">
                      Choose location
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
                      text-gray-500
                    "
                  />
                </div>

                {errors.location && (
                  <p
                    id="location-error"
                    className="mt-1.5 text-xs text-red-600"
                  >
                    {errors.location}
                  </p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label
                  htmlFor="companyName"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-gray-900
                  "
                >
                  Company Name{" "}
                  <span className="font-normal text-gray-900">
                    (Optional)
                  </span>
                </label>

                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  className="
                    h-12
                    w-full
                    border-0
                    bg-[#F75C1E]/8
                    px-4
                    text-sm
                    text-gray-900
                    outline-none
                    placeholder:text-gray-400
                  "
                />
              </div>

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-gray-900
                  "
                >
                  Name
                  <span
                    aria-hidden="true"
                    className="ml-1 text-[#F75C1E]"
                  >
                    *
                  </span>
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name ? "name-error" : undefined
                  }
                  className={`
                    h-12
                    w-full
                    border-0
                    bg-[#F75C1E]/8
                    px-4
                    text-sm
                    text-gray-900
                    outline-none
                    placeholder:text-gray-400
                    $
                  `}
                />

                {errors.name && (
                  <p
                    id="name-error"
                    className="mt-1.5 text-xs text-red-600"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-gray-900
                  "
                >
                  Email
                  <span
                    aria-hidden="true"
                    className="ml-1 text-[#F75C1E]"
                  >
                    *
                  </span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? "email-error" : undefined
                  }
                  className={`
                    h-12
                    w-full
                    border-0
                    bg-[#F75C1E]/8
                    px-4
                    text-sm
                    text-gray-900
                    outline-none
                    placeholder:text-gray-400
                    $
                  `}
                />

                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-1.5 text-xs text-red-600"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-gray-900
                  "
                >
                  Message
                  <span
                    aria-hidden="true"
                    className="ml-1 text-[#F75C1E]"
                  >
                    *
                  </span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={6}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message
                      ? "message-error"
                      : undefined
                  }
                  className={`
                    min-h-[180px]
                    w-full
                    resize-none
                    border-0
                    bg-[#F75C1E]/8
                    px-4
                    py-3
                    text-sm
                    text-gray-900
                    outline-none
                    placeholder:text-gray-400
                    $
                  `}
                />

                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1.5 text-xs text-red-600"
                  >
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submit */}
            <div className="mt-7">
              <button
                type="submit"
                className="
                  w-full
                  bg-[#F75C1E]
                  px-8
                  py-3.5
                  text-md
                  font-medium
                  text-white
                  shadow-sm
                  outline-none
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#df4f18]
                  hover:shadow-lg
                  active:scale-[0.98]
                  focus-visible:ring-2
                  focus-visible:ring-[#F75C1E]
                  focus-visible:ring-offset-2
                  sm:w-auto
                "
              >
                Send Message
              </button>
            </div>

            {/* Success Message */}
            {isSubmitted && (
              <p
                role="status"
                className="
                  mt-4
                  text-sm
                  font-medium
                  text-green-600
                "
              >
                Thank you. Your application has been submitted
                successfully.
              </p>
            )}
          </form>

          {/* =================================================
              DIVIDER
              ================================================= */}
          <div
            aria-hidden="true"
            className="my-8 h-px w-full bg-gray-200"
          />

          {/* =================================================
              CONTACT INFORMATION
              ================================================= */}
          <div
            className="
              grid
              grid-cols-1
              gap-3
              md:grid-cols-3
              md:gap-2
            "
          >
            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin
                aria-hidden="true"
                className="
                  mt-0.5
                  h-5
                  w-5
                  shrink-0
                  text-[#F75C1E]
                "
                strokeWidth={1.8}
              />

              <div>
                <h3 className="text-lg font-semibold text-[#F75C1E]">
                  Address
                </h3>

                <address
                  className="
                    mt-2
                    not-italic
                    text-md
                    leading-7
                    text-gray-800
                  "
                >
                  6A Milton Road, Ikoyi,
                  <br />
                  Lagos, Nigeria.
                </address>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone
                aria-hidden="true"
                className="
                  mt-0.5
                  h-5
                  w-5
                  shrink-0
                  text-[#F75C1E]
                "
                strokeWidth={1.8}
              />

              <div>
                <h3 className="text-lg font-semibold text-[#F75C1E]">
                  Phone Number
                </h3>

                <p
                  className="
                    mt-2
                    not-italic
                    block
                    text-md
                    text-gray-800
                  "
                >
                  01-6349260
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail
                aria-hidden="true"
                className="
                  mt-0.5
                  h-5
                  w-5
                  shrink-0
                  text-[#F75C1E]
                "
                strokeWidth={1.8}
              />

              <div>
                <h3 className="text-lg font-semibold text-[#F75C1E]">
                  Email Address
                </h3>

                <p
                  className="
                    mt-2
                    block
                    break-all
                    text-md
                    text-gray-800
                  "
                >
                  info@banksluxuryapartments.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplySection;