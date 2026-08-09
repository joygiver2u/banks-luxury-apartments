import type { LucideIcon } from "lucide-react";

interface AmenityCardProps {
  label: string;
  icon: LucideIcon;
}

const AmenityCard = ({
  label,
  icon: Icon,
}: AmenityCardProps) => {
  return (
    <div
      className="
        group
        flex
        flex-col
        items-center
        text-center
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-white/70
          text-white
          transition-all
          duration-300
          group-hover:scale-105
          group-hover:border-white
          sm:h-16
          sm:w-16
        "
      >
        <Icon
          size={24}
          strokeWidth={1.6}
          aria-hidden="true"
          className="
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />
      </div>

      {/* Label */}
      <span
        className="
          mt-3
          max-w-[120px]
          text-center
          text-xs
          font-medium
          leading-5
          text-white/95
          transition-colors
          duration-300
          group-hover:text-white
          sm:mt-4
          sm:text-sm
        "
      >
        {label}
      </span>
    </div>
  );
};

export default AmenityCard;