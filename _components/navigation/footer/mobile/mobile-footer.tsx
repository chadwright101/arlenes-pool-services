import SocialIcons from "@/_lib/utils/social-icons";
import Image from "next/image";
import Link from "next/link";

export function MobileFooter() {
  return (
    <div className="flex flex-col gap-5 items-center px-5 py-10 desktop:hidden">
      <SocialIcons />
      <div className="text-center">
        <p className="text-[14px]">Designed & developed by</p>
        <Link
          href="https://thewrightdesigns.co.za"
          aria-label="The Wright Designs"
          className="text-[14px] p-2 -m-2 text-linkBlue font-light"
          target="_blank"
        >
          The Wright Designs
        </Link>
      </div>
      <Image
        src="/images/arlenes-pool-services-logo.png"
        alt="Arlene's Pool Services"
        width={120}
        height={100}
        className="w-[104px] h-auto"
      />
      <div className="text-center">
        <h4
          className="font-light text-[14px]"
          style={{ fontVariant: "normal" }}
        >
          © Arlene's Pool Services
        </h4>
        <Link
          href="/"
          className="text-[14px] p-2 -m-2 text-linkBlue font-light"
        >
          www.arlenespools.co.za
        </Link>
      </div>
    </div>
  );
}
