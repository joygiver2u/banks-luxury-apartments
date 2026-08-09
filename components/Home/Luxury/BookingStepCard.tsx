import type { LucideIcon } from "lucide-react";

interface BookingStepCardProps {
  icon: LucideIcon;
  text: string;
}

const BookingStepCard = ({
  icon: Icon,
  text,
}: BookingStepCardProps) => {
  return (
    <div
      className="
        flex
        min-h-20.5
        w-full
        items-center
        gap-5
        border
        border-gray-200
        bg-white
        px-5
        py-4
        transition-all
        duration-300
        sm:px-6
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          text-[#F45A22]
          sm:h-12
          sm:w-12
        "
      >
        <Icon
          size={28}
          strokeWidth={1.6}
          aria-hidden="true"
        />
      </div>

      {/* Description */}
      <p
        className="
          text-sm
          leading-6
          text-[#555555]
          sm:text-[15px]
          sm:leading-6
        "
      >
        {text}
      </p>
    </div>
  );
};

export default BookingStepCard;