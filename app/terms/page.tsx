import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Policies | Banks L.A.",
  description:
    "Terms and policies for the Banks L.A. luxury apartment booking website.",
};

function NumberedParagraph({ text }: { text: string }) {
  const match = text.match(/^(\d+\.\d+)(\s+)(.*)$/);

  if (!match) {
    return <p>{text}</p>;
  }

  const [, number, spacing, content] = match;

  return (
    <p>
      <strong className="font-semibold text-gray-700">
        {number}
      </strong>
      {spacing}
      {content}
    </p>
  );
}

interface TermsSection {
  heading: string;
  paragraphs?: string[];
  items?: string[];
  subsections?: {
    heading: string;
    paragraphs?: string[];
    items?: string[];
  }[];
}

const termsSections: TermsSection[] = [
  {
    heading: "A Welcome Note",
    paragraphs: [
      "Welcome to Banks L.A. We hope your journey was smooth and stress-free. Before you settle in, we would like to familiarize you with a few of the most important house rules of our properties. They are in place to ensure that your stay with us is as conducive as possible."
    ],
  },

  {
    heading: "Acceptance of Terms and Conditions",
    paragraphs: [
      "1.1 All bookings accepted by Banks L.A. are subject to these terms and conditions, which are to be accepted by the guest(s) and other parties involved. When you make a booking with Banks L.A. you agree to the general conditions.",
      "1.2 Prices and availability are subject to changes at any point in time and would be updated at the earliest opportunity.",
      "1.3 By completing payment of rental fee(s) or (damage) deposit, these terms and conditions will be considered binding on all the parties involved.",
      "1.4 Serviced properties are priced inclusive of utilities unless otherwise stated.",
    ],
  },

  {
    heading: "Booking & Payments",
    paragraphs: [
      "2.1 A booking is not valid until a confirmation of payment is received from us. Full payment of the rental fee is to be made on booking. Payment must be received within 24 hours of booking, after which confirmation will be sent and the reservations will be made.",
      "2.2 Booking will be cancelled after 24 hours if the payment is not made.",
      "2.3 The minimum night stay is two (2) days.",
      "2.4 Accepted currency for payment are in Naira, Dollars, and Pounds unless specifically stated otherwise. Bank Details are available on request.",
      "2.5 Bank details are available on request.",
    ],
  },

  {
    heading: "Cancellation and Modification of Booking",
    paragraphs: [
      "3.1 Any cancellation or modification of a booking can only be effected by the Guest providing written notification of the cancellation or modification to Banks L.A. The non-payment of rental balances results in automatic cancellation.",
      "3.2 Banks L.A. would endeavor to alter bookings if the guest wished to do so. Changes to reservations made can however not be guaranteed by Banks L.A.",
      "3.3 Changes to booking dates or properties are subject to availability. Each booking change shall incur a service fee to be paid at the time of confirming the said changes.",
      "3.4 In the case where a modification is made less than 5 nights before the start date of your booking, resulting in vacancy, guests will be charged a fee.",
      "3.5 All properties must be vacated by noon on the day of departure. If there is any delay in vacating the property beyond the agreed time a full day's rental is charged to you.",
      "3.6 Should Guests cancel a booking for whatever reason, they will have the right to reimbursement of all money paid subject to the deduction of cancellation charges being 10% of the total rental price if cancellations are made 14 days before the guest checking in.",
    ],
  },

  {
    heading: "Security Deposit & Property Damage",
    paragraphs: [
      "4.1 A refundable security deposit of ₦100,000.00 shall be required by Banks L.A. before or on the arrival of the Guest.",
      "4.2 The security deposit shall be refunded within 2 working days after departure if payment for your stay was made in local currency and 7 working days if payment was made in foreign currency.",
      "4.3 We have the authority to withhold or deduct monies from the security deposit to remedy any damage, excess cleaning, missing items, or excess utilities caused by the Guest or to send an invoice for such monies to the Guest by email for immediate payment.",
      "4.4 In the event a guest damages an item, multiple items, or damages the property, that is worth more than the security deposit paid, the guest forfeits the deposit, and the guest is liable to cover the additional cost of damages depending on the market value of property damaged or as stipulated by Banks L.A.",
      "4.5 Our staff and or maintenance team have the right of access to the property at any time, with due regard to your convenience, to inspect the property and carry out any essential repair or maintenance work.",
      "4.6 All security deposits are fully refundable provided there are no damages to all booked apartments in the Banks L.A. property.",
    ],
  },

  {
    heading: "Conducts of Guests",
    paragraphs: [
      "5.1 All accommodations must only be used for private/residential use. Exceeding the number of allowed guests will result in the automatic termination of the booking and you will be asked to vacate the property immediately without a refund.",
      "5.2 Smoking is not allowed in any of our properties. If there is evidence of such including a smoke odor Banks L.A. will charge a fee of ₦150,000.00 to cover the cleaning of curtains and carpets.",
      "5.3 Parties or any form of get-togethers are not allowed on the properties. Failure to comply with the 'NO PARTY RULE' will attract a fee.",
      "5.4 Photoshoots, video shoots, and commercials are to be made on special request before check- in.",
      "5.5 Properties should be kept in a clean and tidy condition. You must also comply with the By- Laws that apply to the properties and shall not be guilty of conduct that is a nuisance or annoyance to adjoining or neighboring occupiers.",
      "5.6 Pets are not allowed inside the accommodation under any circumstances. Any pets found inside the properties will result in the termination of your booking without a refund.",
      "5.7 The rules for check-in and check-out are set by us. All properties are usually available for occupation after 2:00 pm on the day of arrival. Guest(s) vacating the apartment beyond the time agreed upon will be charged a full day’s rental fee, equal to the applicable nightly rate on the day the apartment is agreed /upon to be vacated.",
      "5.8 We have the right to terminate a booking at any time on the grounds of abuse to staff or other guests, mistreatment of the property, or criminal activity on the part of those occupying the apartment or their guests.",
    ],
  },

  {
    heading: "Extension",
    paragraphs: [
      "6.1 Banks L.A. offers in-house guests the opportunity to extend their stay before accepting new bookings. Please notify Banks L.A. in writing at least 2-3 days before the end date of your original booking.",
      "6.2 Banks L.A. is a company that is active in the seasonal business that is linked to trends in corporate housing. Therefore, in case of an extension, the nightly rate used for your extension can differ from the nightly rate used in your original booking. Banks L.A. will always notify you when this is the case and ask for your approval before finalizing the requested extension.",
    ],
  },

];

function TermsContent() {
  return (
    <article className="w-full max-w-4xl">
      {/* Page heading */}
      <header className="mb-10">
        <h1 className="text-2xl font-semibold tracking-wider leading-tight text-[#F75C1E] sm:text-3xl">
          Banks L.A. Policies
        </h1>
      </header>

      {/* Legal sections */}
      <div className="space-y-10">
        {termsSections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-medium text-[#F75C1E] sm:text-2xl">
              {section.heading}
            </h2>

            {section.paragraphs && (
              <div className="space-y-4 text-sm leading-4 text-gray-500 sm:text-[15px] sm:leading-7">
                    {section.paragraphs.map((paragraph, index) => (
                        <NumberedParagraph
                            key={index}
                            text={paragraph}
                        />
                    ))}
              </div>
            )}

            {section.items && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600 sm:text-[15px]">
                {section.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            {section.subsections && (
              <div className="mt-7 space-y-7">
                {section.subsections.map((subsection) => (
                  <div key={subsection.heading}>
                    <h3 className="mb-3 text-base font-medium text-[#F75C1E] sm:text-lg">
                      {subsection.heading}
                    </h3>

                    {subsection.paragraphs && (
                      <div className="space-y-4 text-sm leading-7 text-gray-600 sm:text-[15px]">
                        {subsection.paragraphs.map(
                          (paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          )
                        )}
                      </div>
                    )}

                    {subsection.items && (
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600 sm:text-[15px]">
                        {subsection.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}

export default function TermsPage() {
  return (
    <>

      <main className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-[20%_80%]">
          {/* ==================================================
              LEFT PEACH PANEL
              ================================================== */}

          <aside
            aria-label="Terms and Conditions"
            className="
              bg-[#FFF3EF]
              px-6
              py-10
              sm:px-8
              lg:min-h-screen
              lg:self-start
              lg:px-10
              lg:py-12
              xl:px-12
            "
          >
            <p className="max-w-55 text-sm font-medium leading-6 text-[#F75C1E]">
              Banks L.A. Policies
            </p>
          </aside>

          {/* ==================================================
              TERMS CONTENT
              ================================================== */}

          <div
            className="
              min-w-0
              px-6
              py-10
              sm:px-8
              md:px-12
              lg:px-14
              lg:py-12
              xl:px-20
              2xl:px-24
            "
          >
            <TermsContent />
          </div>
        </div>
      </main>

      <div className="h-6 sm:h-8" />
    </>
  );
}