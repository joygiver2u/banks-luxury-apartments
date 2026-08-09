"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  Eye,
  EyeOff,
  UserRound,
} from "lucide-react";

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    return newErrors;
  };

  const clearFieldError = (field: keyof FormErrors) => {
    if (!errors[field]) return;

    setErrors((previous) => ({
      ...previous,
      [field]: undefined,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    /*
     * Authentication/registration backend is not connected yet.
     *
     * Connect the existing authentication service here.
     */

    setIsSubmitting(true);

    // Temporary placeholder until real authentication is connected.
    window.setTimeout(() => {
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section
      aria-labelledby="signup-heading"
      className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/signup-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-white/15"
        />
      </div>

      {/* Page Content */}
      <div
        className="
          relative
          z-10
          flex
          min-h-[calc(100vh-80px)]
          items-center
          justify-center
          px-4
          py-10
          sm:px-6
          sm:py-14
        "
      >
        {/* Registration Card */}
        <div
          className="
            w-full
            max-w-[600px]
            bg-white
            px-6
            py-9
            shadow-xl
            sm:px-10
            sm:py-11
            md:px-12
            md:py-12
          "
        >
          {/* Heading */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <UserRound
                aria-hidden="true"
                className="
                  h-7
                  w-7
                  text-[#F75C1E]
                  sm:h-8
                  sm:w-8
                "
                strokeWidth={1.7}
              />

              <h1
                id="signup-heading"
                className="
                  text-3xl
                  font-semibold
                  tracking-tight
                  text-gray-900
                  sm:text-4xl
                "
              >
                Sign Up
              </h1>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div
              aria-hidden="true"
              className="h-px flex-1 bg-gray-200"
            />

            <span className="shrink-0 text-sm text-gray-400">
              Or Register with Email
            </span>

            <div
              aria-hidden="true"
              className="h-px flex-1 bg-gray-200"
            />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5"
          >
            {/* First Name + Last Name */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* First Name */}
              <div>
                <label
                  htmlFor="first-name"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-gray-800
                  "
                >
                  First Name
                </label>

                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  value={firstName}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                    clearFieldError("firstName");
                  }}
                  placeholder="Enter first name"
                  aria-invalid={Boolean(errors.firstName)}
                  aria-describedby={
                    errors.firstName
                      ? "first-name-error"
                      : undefined
                  }
                  className="
                    h-13
                    w-full
                    bg-gray-100
                    px-4
                    text-sm
                    text-gray-900
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:bg-white
                    focus:ring-1
                    focus:ring-[#F75C1E]
                  "
                />

                {errors.firstName && (
                  <p
                    id="first-name-error"
                    role="alert"
                    className="mt-1.5 text-xs text-red-600"
                  >
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="last-name"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-gray-800
                  "
                >
                  Last name
                </label>

                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(event) => {
                    setLastName(event.target.value);
                    clearFieldError("lastName");
                  }}
                  placeholder="Enter surname"
                  aria-invalid={Boolean(errors.lastName)}
                  aria-describedby={
                    errors.lastName
                      ? "last-name-error"
                      : undefined
                  }
                  className="
                    h-13
                    w-full
                    bg-gray-100
                    px-4
                    text-sm
                    text-gray-900
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:bg-white
                    focus:ring-1
                    focus:ring-[#F75C1E]
                  "
                />

                {errors.lastName && (
                  <p
                    id="last-name-error"
                    role="alert"
                    className="mt-1.5 text-xs text-red-600"
                  >
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="signup-email"
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-gray-800
                "
              >
                Email
              </label>

              <input
                id="signup-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  clearFieldError("email");
                }}
                placeholder="Enter your email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email
                    ? "signup-email-error"
                    : undefined
                }
                className="
                  h-13
                  w-full
                  bg-gray-100
                  px-4
                  text-sm
                  text-gray-900
                  outline-none
                  transition
                  placeholder:text-gray-400
                  focus:bg-white
                  focus:ring-1
                  focus:ring-[#F75C1E]
                "
              />

              {errors.email && (
                <p
                  id="signup-email-error"
                  role="alert"
                  className="mt-1.5 text-xs text-red-600"
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password + Confirm Password */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Password */}
              <div>
                <label
                  htmlFor="signup-password"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-gray-800
                  "
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="signup-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      clearFieldError("password");
                    }}
                    placeholder="Enter password"
                    aria-invalid={Boolean(errors.password)}
                    aria-describedby={
                      errors.password
                        ? "signup-password-error"
                        : undefined
                    }
                    className="
                      h-13
                      w-full
                      bg-gray-100
                      px-4
                      pr-12
                      text-sm
                      text-gray-900
                      outline-none
                      transition
                      placeholder:text-gray-400
                      focus:bg-white
                      focus:ring-1
                      focus:ring-[#F75C1E]
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((previous) => !previous)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    className="
                      absolute
                      right-0
                      top-0
                      flex
                      h-13
                      w-12
                      items-center
                      justify-center
                      text-gray-400
                      transition-colors
                      cursor-pointer
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-inset
                      focus-visible:ring-[#F75C1E]
                    "
                  >
                    {showPassword ? (
                      <EyeOff
                        aria-hidden="true"
                        className="h-5 w-5"
                        strokeWidth={1.7}
                      />
                    ) : (
                      <Eye
                        aria-hidden="true"
                        className="h-5 w-5"
                        strokeWidth={1.7}
                      />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p
                    id="signup-password-error"
                    role="alert"
                    className="mt-1.5 text-xs text-red-600"
                  >
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirm-password"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-gray-800
                  "
                >
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    id="confirm-password"
                    name="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(event) => {
                      setConfirmPassword(event.target.value);
                      clearFieldError("confirmPassword");
                    }}
                    placeholder="Re-enter"
                    aria-invalid={Boolean(
                      errors.confirmPassword
                    )}
                    aria-describedby={
                      errors.confirmPassword
                        ? "confirm-password-error"
                        : undefined
                    }
                    className="
                      h-13
                      w-full
                      bg-gray-100
                      px-4
                      pr-12
                      text-sm
                      text-gray-900
                      outline-none
                      transition
                      placeholder:text-gray-400
                      focus:bg-white
                      focus:ring-1
                      focus:ring-[#F75C1E]
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        (previous) => !previous
                      )
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                    className="
                      absolute
                      right-0
                      top-0
                      flex
                      h-13
                      w-12
                      items-center
                      justify-center
                      text-gray-400
                      transition-colors
                      cursor-pointer
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-inset
                      focus-visible:ring-[#F75C1E]
                    "
                  >
                    {showConfirmPassword ? (
                      <EyeOff
                        aria-hidden="true"
                        className="h-5 w-5"
                        strokeWidth={1.7}
                      />
                    ) : (
                      <Eye
                        aria-hidden="true"
                        className="h-5 w-5"
                        strokeWidth={1.7}
                      />
                    )}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p
                    id="confirm-password-error"
                    role="alert"
                    className="mt-1.5 text-xs"
                  >
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                mt-2
                flex
                h-13
                w-full
                items-center
                justify-center
                bg-[#F75C1E]
                px-6
                text-sm
                font-semibold
                uppercase
                tracking-wide
                text-white
                shadow-sm
                transition-all
                duration-300
                cursor-pointer
                hover:bg-[#D94D19]
                hover:shadow-md
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#F75C1E]
                focus-visible:ring-offset-2
                disabled:cursor-not-allowed
                disabled:opacity-70
              "
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </form>

          {/* Terms */}
          <p
            className="
              mt-6
              text-center
              text-xs
              leading-6
              text-gray-500
              sm:text-sm
            "
          >
            By Signing Up you agree to our{" "}
            <Link
              href="/terms"
              className="
                font-medium
                text-[#F75C1E]
                transition-colors
                hover:text-[#D94D19]
                focus:outline-none
                focus-visible:rounded
                focus-visible:ring-2
                focus-visible:ring-[#F75C1E]
              "
            >
              Terms
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="
                font-medium
                text-[#F75C1E]
                transition-colors
                hover:text-[#D94D19]
                focus:outline-none
                focus-visible:rounded
                focus-visible:ring-2
                focus-visible:ring-[#F75C1E]
              "
            >
              Privacy
            </Link>
          </p>

          {/* Login */}
          <p className="mt-5 text-center text-sm text-gray-500">
            Have an account?{" "}
            <Link
              href="/login"
              className="
                font-medium
                text-[#F75C1E]
                transition-colors
                hover:text-[#D94D19]
                focus:outline-none
                focus-visible:rounded
                focus-visible:ring-2
                focus-visible:ring-[#F75C1E]
              "
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}