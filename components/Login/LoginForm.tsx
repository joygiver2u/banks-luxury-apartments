"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  Eye,
  EyeOff,
  LogIn,
} from "lucide-react";

interface FormErrors {
  email?: string;
  password?: string;
  submit?: string;
}

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
    }

    return newErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    /*
     * Authentication is not connected yet.
     *
     * Connect the real authentication service here.
     */

    setIsSubmitting(true);

    // Placeholder until backend authentication is connected.
    window.setTimeout(() => {
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section
      aria-labelledby="login-heading"
      className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/login-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Very subtle overlay */}
        <div className="absolute inset-0 bg-white/15" />
      </div>

      {/* Login Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-10 sm:px-6 sm:py-14">
        <div
          className="
            w-full
            max-w-[700px]
            bg-white
            px-6
            py-10
            shadow-xl
            sm:px-10
            sm:py-12
            md:px-16
            md:py-14
            lg:px-20
            lg:py-16
          "
        >
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <LogIn
                aria-hidden="true"
                className="h-7 w-7 text-[#F75C1E] sm:h-8 sm:w-8"
                strokeWidth={1.8}
              />

              <h1
                id="login-heading"
                className="
                  text-3xl
                  font-semibold
                  tracking-tight
                  text-gray-900
                  sm:text-4xl
                "
              >
                Log In
              </h1>
            </div>
          </div>

          {/* Login Method Separator */}
          <div className="my-9 flex items-center gap-4">
            <div
              aria-hidden="true"
              className="h-px flex-1 bg-gray-200"
            />

            <span className="shrink-0 text-sm text-gray-400">
              Or Log in with Email
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
            className="space-y-6"
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-800"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);

                  if (errors.email) {
                    setErrors((previous) => ({
                      ...previous,
                      email: undefined,
                    }));
                  }
                }}
                placeholder="Enter your email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? "email-error" : undefined
                }
                className="
                  h-14
                  w-full
                  bg-gray-50
                  px-5
                  text-sm
                  text-gray-900
                  outline-none
                  transition
                  placeholder:text-gray-400
                  focus:bg-white
                  focus:ring-2
                  focus:ring-[#F75C1E]/30
                "
              />

              {errors.email && (
                <p
                  id="email-error"
                  role="alert"
                  className="mt-2 text-sm text-red-600"
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-800"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);

                    if (errors.password) {
                      setErrors((previous) => ({
                        ...previous,
                        password: undefined,
                      }));
                    }
                  }}
                  placeholder="Enter password"
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={
                    errors.password
                      ? "password-error"
                      : undefined
                  }
                  className="
                    h-14
                    w-full
                    bg-gray-50
                    px-5
                    pr-14
                    text-sm
                    text-gray-900
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:bg-white
                    focus:ring-2
                    focus:ring-[#F75C1E]/30
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
                    h-14
                    w-14
                    items-center
                    justify-center
                    text-gray-400
                    transition-colors
                    hover:text-[#F75C1E]
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
                  id="password-error"
                  role="alert"
                  className="mt-2 text-sm text-red-600"
                >
                  {errors.password}
                </p>
              )}
            </div>

            {/* Remember Me / Forgot Password */}
            <div
              className="
                flex
                flex-wrap
                items-center
                justify-between
                gap-4
              "
            >
              <label
                htmlFor="remember-me"
                className="
                  flex
                  cursor-pointer
                  items-center
                  gap-2
                  text-sm
                  text-gray-600
                "
              >
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) =>
                    setRememberMe(event.target.checked)
                  }
                  className="
                    h-4
                    w-4
                    cursor-pointer
                    rounded
                    border-gray-300
                    text-[#F75C1E]
                    accent-[#F75C1E]
                    focus:ring-2
                    focus:ring-[#F75C1E]/30
                  "
                />

                <span>Remember me</span>
              </label>

              <Link
                href="/forgot-password"
                className="
                  text-sm
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
                Forgot password?
              </Link>
            </div>

            {/* Submit Error */}
            {errors.submit && (
              <p
                role="alert"
                className="text-sm text-red-600"
              >
                {errors.submit}
              </p>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                flex
                h-14
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
              {isSubmitting ? "Logging In..." : "Log In"}
            </button>
          </form>

          {/* Register */}
          <p className="mt-8 text-center text-sm text-gray-500">
            Don't have an account yet?{" "}
            <Link
              href="/signup"
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
              Register here.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}