import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="Banks Luxury Apartments"
      className="flex shrink-0 items-center"
    >
      {/* Logo mark */}
      <div className="mr-3 flex h-10 w-10 items-center justify-center">
        <Image
          src="/images/logo.png"
          alt="Banks Luxury Apartments logo"
          width={40}
          height={40}
          priority
        />
      </div>

      {/* Logo text */}
      <div className="leading-none">
        <p className="text-[15px] font-semibold tracking-tight text-[#666666]">
          BANKS LUXURY
        </p>

        <p className="mt-1 text-[10px] tracking-[0.20em] text-[#666666]">
          SERVICED APARTMENTS
        </p>
      </div>
    </Link>
  );
};

export default Logo;