import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link
        href="/"
        className="flex shrink-0 items-center"
        aria-label="Banks Luxury Serviced Apartments"
      >
        <div className="flex items-center gap-3">
          {/* Logo mark */}
          <div className="relative h-12 w-12 shrink-0">
            <Image
            src="/images/logo.png"
            alt="Banks Luxury Apartments Logo"
            fill
            priority
            sizes="40px"
            className="object-contain"
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
        </div>
        <MobileMenu/>
      </Link>
      
      <MobileMenu />
    </div>
  );
};

export default Logo;