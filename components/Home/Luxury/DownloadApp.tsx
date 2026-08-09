import Image from "next/image";

const DownloadApp = () => {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1776px]
          px-5
          pb-24
          pt-24
          sm:px-8
          sm:pb-20
          sm:pt-28
          lg:px-[52px]
          lg:pb-40
          lg:pt-[105px]
        "
      >
        <div
          className="
            relative
            isolate
            h-[300px]
            w-full
            overflow-visible
            bg-[#f84b24]
            sm:h-[335px]
            lg:h-[375px]
          "
        >
          {/* =====================================================
              ABSTRACT ORANGE BACKGROUND SHAPES
              ===================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              -z-10
              overflow-hidden
            "
          >
            <div
              className="
                absolute
                -left-[10%]
                -top-[60%]
                h-[125%]
                w-[40%]
                rounded-[50%]
                bg-[#f66c4b]
                opacity-80
              "
            />

            <div
              className="
                absolute
                left-[15%]
                -top-[70%]
                h-[150%]
                w-[32%]
                rounded-[50%]
                bg-[#fa5a32]
                opacity-70
              "
            />

            <div
              className="
                absolute
                left-[45%]
                -top-[75%]
                h-[160%]
                w-[32%]
                rounded-[50%]
                bg-[#f96b45]
                opacity-60
              "
            />

            <div
              className="
                absolute
                right-[-8%]
                -top-[50%]
                h-[145%]
                w-[35%]
                rounded-[50%]
                bg-[#fa5b31]
                opacity-70
              "
            />

            <div
              className="
                absolute
                -bottom-[75%]
                left-[35%]
                h-[150%]
                w-[45%]
                rounded-[50%]
                bg-[#f66b46]
                opacity-50
              "
            />
          </div>

          {/* =====================================================
              PHONE IMAGE
              ===================================================== */}

          <div
            className="
              absolute
              bottom-[-85px]
              left-[5%]
              z-20
              h-[445px]
              w-[220px]
              sm:bottom-[-105px]
              sm:left-[6%]
              sm:h-[500px]
              sm:w-[245px]
              lg:bottom-[-125px]
              lg:left-[2%]
              lg:h-[600px]
              lg:w-[300px]
            "
          >

            <Image
              src="/images/phone.png"
              alt="Banks LA mobile booking application"
              fill
              sizes="
                (max-width: 640px) 220px,
                (max-width: 1024px) 245px,
                275px
              "
              className="object-contain object-bottom"
            />
          </div>

          {/* =====================================================
              APP CONTENT
              ===================================================== */}

          <div
            className="
              absolute
              right-[4%]
              top-1/2
              w-[53%]
              -translate-y-1/2
              text-white
              sm:right-[5%]
              sm:w-[51%]
              lg:right-[6%]
              lg:w-[48%]
            "
          >
            <h2
              className="
                text-xl
                font-semibold
                leading-tight
                sm:text-2xl
                lg:text-[36px]
              "
            >
              Download the App
            </h2>

            <p
              className="
                mt-2
                max-w-[590px]
                text-[10px]
                leading-[1.5]
                sm:mt-3
                sm:text-xs
                lg:text-[13px]
                lg:leading-5
              "
            >
              Make and track your bookings all in one application. Enjoy a
              fully automated booking experience.
            </p>

            <p
              className="
                mt-1
                text-[10px]
                leading-4
                sm:text-xs
                lg:text-[13px]
              "
            >
              Coming soon on the following platforms
            </p>

            {/* =================================================
                STORE BADGES
                ================================================= */}

            <div
              className="
                mt-4
                flex
                items-center
                gap-2
                sm:mt-5
                sm:gap-3
                lg:mt-5
              "
            >
              {/* Google Play */}

              <div
                className="
                  relative
                  h-[32px]
                  w-[88px]
                  sm:h-[42px]
                  sm:w-[118px]
                  lg:h-[100px]
                  lg:w-[372px]
                "
              >

                <Image
                  src="/images/google-play.png"
                  alt="Download on Google Play"
                  fill
                  sizes="
                    (max-width: 640px) 88px,
                    (max-width: 1024px) 118px,
                    372px
                  "
                  className="object-contain object-left rounded-3xl"
                />
              </div>

              {/* Apple App Store */}

              <div
                className="
                  relative
                  h-[32px]
                  w-[100px]
                  sm:h-[42px]
                  sm:w-[135px]
                  lg:h-[100px]
                  lg:w-[377px]
                "
              >

                <Image
                  src="/images/app-store.png"
                  alt="Download on the App Store"
                  fill
                  sizes="
                    (max-width: 640px) 100px,
                    (max-width: 1024px) 135px,
                    377px
                  "
                  className="object-contain object-left rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;