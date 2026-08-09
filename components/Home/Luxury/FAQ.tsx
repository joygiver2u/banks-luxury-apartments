"use client";

import FAQBackground from "./FAQBackground";
import FAQItem from "./FAQItem";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    id: "faq-1",
    question: "How do I amend my reservation?",
    answer: "",
  },
  {
    id: "faq-2",
    question: "Is there a minimum length of stay?",
    answer: "",
  },
  {
    id: "faq-3",
    question: "How do I make a reservation?",
    answer: "",
  },
  {
    id: "faq-4",
    question: "When do I need to pay?",
    answer: "",
  },
  {
    id: "faq-5",
    question: "If I cancel, can I get a refund?",
    answer: "",
  },
  {
    id: "faq-6",
    question:
      "What are the differences between hotel and serviced apartments?",
    answer: "",
  },
  {
    id: "faq-7",
    question: "What's the pet policy in serviced apartments?",
    answer: "",
  },
  {
    id: "faq-8",
    question: "Can I smoke in my apartment?",
    answer: "",
  },
  {
    id: "faq-9",
    question:
      "What if I need to check in early or check out later than the standard time?",
    answer: "",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="
        relative
        overflow-hidden
        bg-black
        py-20
        sm:py-24
        lg:py-32
      "
    >
      {/* Background contour pattern */}
      <FAQBackground />

      {/* Main content */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          px-6
          sm:px-8
          lg:px-12
          xl:px-16
          2xl:px-20
        "
      >
        {/* Header */}
        <div
          className="
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-[1fr_1fr]
            lg:gap-20
          "
        >
          {/* Heading */}
          <div>
            <h2
              id="faq-heading"
              className="
                max-w-xl
                text-4xl
                font-semibold
                leading-[1.05]
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
                xl:text-[30px]
              "
            >
              Frequently Asked
              <br />
              <span className="text-[#f4512a]">Questions</span>
            </h2>
          </div>

          {/* Supporting description */}
          <div
            className="
              flex
              items-start
              gap-5
              pt-1
              lg:pt-4
            "
          >
            <div
              className="
                mt-3
                hidden
                h-px
                w-16
                shrink-0
                bg-white/25
                sm:block
                lg:w-24
                xl:w-32
              "
              aria-hidden="true"
            />

            <p
              className="
                max-w-md
                text-10xl
                leading-7
                text-white/75
                sm:text-[3px]
                lg:text-[12px]
              "
            >
              Find answers to common questions most of our guests inquire
              about.
            </p>
          </div>
        </div>

        {/* FAQ list */}
        <div
          className="
            mt-16
            w-full
            sm:mt-20
            lg:mt-28
          "
        >
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            pt-20
            text-center
            sm:pt-24
            lg:pt-28
          "
        >
          <h3
            className="
              text-4xl
              font-medium
              tracking-tight
              text-white
              sm:text-2xl
            "
          >
            Have more{" "}
            <span className="text-[#f4512a]">questions?</span>
          </h3>

          <button
            type="button"
            className="
              group
              mt-6
              flex
              h-11
              items-stretch
              overflow-hidden
              border
              border-white/20
              bg-white
              text-sm
              font-medium
              text-black
              transition-all
              duration-300
              hover:border-[#f4512a]
            "
          >
            <span className="flex items-center px-5">
              Chat With Us
            </span>

            <span
              className="
                flex
                w-11
                items-center
                justify-center
                border-l
                border-black/10
                bg-black
                text-white
                transition-colors
                duration-300
                group-hover:bg-[#ffffff]
                group-hover:text-black
              "
            >
              <ArrowRight
                size={16}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;