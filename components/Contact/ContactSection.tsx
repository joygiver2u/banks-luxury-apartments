"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import {
  Check,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

interface EnquiryType {
  id: string;
  label: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const enquiryTypes: EnquiryType[] = [
  {
    id: "general",
    label: "General Enquiry",
  },
  {
    id: "booking",
    label: "Booking Apartment",
  },
  {
    id: "listing",
    label: "Listing Property",
  },
];

const initialFormData: FormData = {
  name: "",
  email: "",
  message: "",
};

const ContactSection = () => {
  const [selectedEnquiry, setSelectedEnquiry] = useState("general");
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  /* =========================================================
     FORM VALIDATION
     ========================================================= */

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

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

  /* =========================================================
     INPUT HANDLER
     ========================================================= */

  const handleInputChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    // Clear the field's error once the user starts correcting it.
    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: undefined,
      }));
    }

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  /* =========================================================
     SUBMIT
     ========================================================= */

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    /*
      Connect your backend/API/email service here.

      For example:
      - Next.js API route
      - Formspree
      - Resend
      - EmailJS
      - Existing project form handler
    */

    console.log({
      enquiryType: selectedEnquiry,
      ...formData,
    });
  };

  return (
    <section
      aria-labelledby="contact-heading"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#fafafa]
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
          ===================================================== */}

      <Image
        src="/images/contact.png"
        alt=""
        fill
        priority={false}
        sizes="100vw"
        className="
          pointer-events-none
          object-cover
          object-center
        "
      />

      {/* =====================================================
          SUBTLE OVERLAY
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-white/60
        "
      />

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-6
          py-20

          sm:px-8
          sm:py-24

          lg:px-12
          lg:py-28
        "
      >
        {/* ===================================================
            HEADING
            =================================================== */}

        <div className="mx-auto max-w-3xl text-base">
          <h1
            id="contact-heading"
            className="
              text-2xl
              font-bold
              leading-tight
              tracking-[2xl]
              text-[#F75C1E]

              sm:text-3xl

              lg:text-4xl
            "
          >
            Contact
          </h1>

          <p
            className="
              mt-4
              text-sm
              leading-6
              text-gray-500

              sm:text-base
              sm:leading-7
            "
          >
            Reach out to us through any of our various channels.
          </p>
        </div>

        {/* ===================================================
            CONTACT CARD
            =================================================== */}

        <div
          className="
            mx-auto
            mt-10
            w-220
            max-w-6xl
            bg-white
            p-6
            shadow-xl

            sm:mt-12
            sm:p-8

            md:p-10

            lg:mt-14
            lg:p-12
          "
        >
          {/* =================================================
              ENQUIRY TYPE
              ================================================= */}

          <fieldset>
            <legend
              className="
                text-[10px]
                font-semibold
                text-black/50

                sm:text-[15px]
              "
            >
              I am interested in
            </legend>

            <div
              className="
                mt-5
                flex
                flex-wrap
                gap-3
              "
            >
              {enquiryTypes.map((type) => {
                const isActive = selectedEnquiry === type.id;

                return (
                  <button
                    key={type.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setSelectedEnquiry(type.id)}
                    className={`
                      rounded-full
                      border
                      cursor-pointer
                      px-5
                      py-2.5
                      text-sm
                      font-medium
                      transition-all
                      duration-300
                      ease-out

                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#F75C1E]
                      focus-visible:ring-offset-2

                      ${
                        isActive
                          ? "border-[#F75C1E] bg-[#F75C1E] text-white shadow-sm"
                          : "border border-black bg-white text-black"
                      }
                    `}
                  >
                    {/* {isActive && (
                      <Check
                        aria-hidden="true"
                        className="mr-1.5 inline-block h-3.5 w-3.5"
                        strokeWidth={2}
                      />
                    )} */}

                    {type.label}
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* =================================================
              FORM
              ================================================= */}

          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-10"
          >
            {/* Name + Email */}
            <div
              className="
                grid
                grid-cols-1
                gap-6

                md:grid-cols-2
              "
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-black
                  "
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(event) =>
                    handleInputChange("name", event.target.value)
                  }
                  placeholder="Enter your first name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name ? "contact-name-error" : undefined
                  }
                  className="
                    w-full
                    border
                    border-transparent
                    bg-[#F75C1E]/8
                    px-4
                    py-3.5
                    text-sm
                    text-black
                    outline-none
                    placeholder:text-gray-400
                  "
                />

                {errors.name && (
                  <p
                    id="contact-name-error"
                    className="mt-2 text-xs text-red-600"
                    role="alert"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-black
                  "
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(event) =>
                    handleInputChange("email", event.target.value)
                  }
                  placeholder="Enter your email address"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? "contact-email-error" : undefined
                  }
                  className="
                    w-full
                    border
                    border-transparent
                    bg-[#F75C1E]/8
                    px-4
                    py-3.5
                    text-sm
                    text-black
                    outline-none
                    placeholder:text-gray-400
                  "
                />

                {errors.email && (
                  <p
                    id="contact-email-error"
                    className="mt-2 text-xs text-red-600"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label
                htmlFor="contact-message"
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-black
                "
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={(event) =>
                  handleInputChange("message", event.target.value)
                }
                placeholder="Your message"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
                className="
                  w-full
                  resize-none
                  border
                  border-transparent
                  bg-[#F75C1E]/8
                  py-3.5
                  px-3.5
                  text-sm
                  text-black
                  outline-none
                  placeholder:text-gray-400
                "
              />

              {errors.message && (
                <p
                  id="contact-message-error"
                  className="mt-2 text-xs text-red-600"
                  role="alert"
                >
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="mt-7">
              <button
                type="submit"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  bg-[#F75C1E]
                  px-8
                  py-3.5
                  text-sm
                  font-medium
                  cursor-pointer
                  text-white
                  shadow-sm
                  transition-all
                  duration-300
                  ease-out

                  hover:-translate-y-0.5
                  hover:bg-[#dc4d17]
                  hover:shadow-lg

                  active:scale-[0.98]

                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#F75C1E]
                  focus-visible:ring-offset-2

                  sm:w-auto
                "
              >
                Send Message
              </button>
            </div>

            {/* Success message */}
            {isSubmitted && (
              <p
                className="
                  mt-4
                  text-sm
                  font-medium
                  text-green-600
                "
                role="status"
              >
                Your message has been received. We&apos;ll get back to you
                shortly.
              </p>
            )}
          </form>

          {/* =================================================
              DIVIDER
              ================================================= */}

          <div
            aria-hidden="true"
            className="
              my-10
              h-px
              w-full
              bg-gray-200

              sm:my-12
            "
          />

          {/* =================================================
              CONTACT INFORMATION
              ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-5

              md:grid-cols-3
              md:gap-3
            "
          >
            {/* Address */}
            <address className="not-italic">
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    text-[#F75C1E]
                  "
                >
                  <MapPin
                    aria-hidden="true"
                    className="h-5 w-5"
                    strokeWidth={1.7}
                  />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#F75C1E]">
                    Address
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-gray-600
                    "
                  >
                    278 Acorn Place,
                    <br />
                    The Providence St,
                    <br />
                    Lekki Phase 1,
                    <br />
                    Lagos.
                  </p>
                </div>
              </div>
            </address>

            {/* Phone */}
            <div>
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    text-[#F75C1E]
                  "
                >
                  <Phone
                    aria-hidden="true"
                    className="h-5 w-5"
                    strokeWidth={1.7}
                  />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#F75C1E]">
                    Phone Number
                  </h3>

                  <a
                    href="tel:+2347048248091"
                    className="
                      mt-2
                      block
                      text-sm
                      text-gray-600
                      transition-colors
                      duration-300
                      hover:text-[#F75C1E]
                      focus:outline-none
                      focus-visible:underline
                    "
                  >
                    +2347048248091
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    text-[#F75C1E]
                  "
                >
                  <Mail
                    aria-hidden="true"
                    className="h-5 w-5"
                    strokeWidth={1.7}
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-[#F75C1E]">
                    Email Address
                  </h3>

                  <a
                    href="mailto:info@banksluxuryapartments.com"
                    className="
                      mt-2
                      block
                      wrap-break-word
                      text-sm
                      text-gray-600
                      transition-colors
                      duration-300
                      hover:text-[#F75C1E]
                      focus:outline-none
                      focus-visible:underline
                    "
                  >
                    info@banksluxuryapartments.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;