import Image from "next/image";
import Link from "next/link";

const JoinBanksList = () => {
  return (
    <section
      aria-labelledby="join-banks-heading"
      className="relative w-full overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND IMAGE
          ===================================================== */}

      <Image
        src="/images/join-banks-bg.jpg"
        alt=""
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* =====================================================
          BACKGROUND OVERLAY
          ===================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/10"
      />

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[680px]
          w-full
          items-center
          justify-start
          px-5
          py-16
          sm:min-h-[700px]
          sm:px-8
          sm:py-20
          md:min-h-[720px]
          md:px-10
          md:py-24
          lg:min-h-[760px]
          lg:px-16
          lg:py-28
          xl:px-24
        "
      >
        {/* =================================================
            CTA CARD
            ================================================= */}

        <div
          className="
            w-full
            max-w-[540px]
            bg-black/75
            p-7
            shadow-2xl
            backdrop-blur-sm
            sm:p-9
            md:max-w-[500px]
            md:p-10
            lg:max-w-[650px]
            lg:p-12
          "
        >
          {/* Heading */}
          <h2
            id="join-banks-heading"
            className="
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              text-white
              sm:text-3xl
              lg:text-3xl
            "
          >
            Join The Banks L.A. List
          </h2>

          {/* Description 1 */}
          <p
            className="
              mt-6
              text-sm
              leading-7
              text-white/85
              sm:text-base
              sm:leading-7
              lg:mt-7
            "
          >
            Whether you&apos;re looking for excellent returns on your
            investment property or you&apos;re a frequent traveller seeking
            premium accommodation, Banks L.A. connects you with a trusted
            network of luxury apartments and discerning guests. By booking
            directly through us, our guests enjoy personalised service and
            memorable stays that encourage repeat visits.
          </p>

          {/* Description 2 */}
          <p
            className="
              mt-5
              text-sm
              leading-7
              text-white/85
              sm:text-base
              sm:leading-7
            "
          >
            Our homeowner partners include professionals, entrepreneurs, and
            investors who value exceptional hospitality and dependable
            property management. Join the Banks L.A. community and maximise
            the value of your investment while delivering outstanding guest
            experiences.
          </p>

          {/* =================================================
              CTA BUTTON
              ================================================= */}

          <Link
            href="/list-your-property#apply-section"
            className="
              mt-8
              border
              border-[#F75C1E]
              inline-flex
              items-center
              justify-center
              bg-[#F75C1E]
              px-7
              py-3.5
              text-sm
              font-medium
              text-white
              hover:text-[#F75C1E]
              hover:-translate-y-0.5
              hover:bg-black/20
              hover:shadow-xl
              sm:w-auto
            "
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinBanksList;