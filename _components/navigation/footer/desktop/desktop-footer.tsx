import Link from "next/link";
import Image from "next/image";

import navData from "@/_data/nav-data.json";
import SocialIcons from "@/_lib/utils/social-icons";

export function DesktopFooter() {
  return (
    <div className="hidden desktop:block bg-white pt-15 pb-5">
      <div className="border-t-2 border-grey/25 pt-5">
        <div className="flex justify-between px-5">
          <nav>
            <ul className="flex flex-col">
              {navData.map((item) => {
                return (
                  <li key={item.title}>
                    <Link
                      href={item.url}
                      className=" text-[14px] font-light hover:text-opacity-80 ease-in-out duration-200 desktop:hover:text-green"
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
              <SocialIcons small cssClasses="mt-3" />
            </ul>
          </nav>

          <div className="flex flex-col items-end justify-around">
            <Image
              src="/images/arlenes-pool-services-logo.png"
              alt="Arlene's Pool Services"
              width={120}
              height={100}
              className="w-[104px] h-auto"
            />
            <div className="text-right">
              <p className="text-[14px] ">Designed & developed by</p>
              <Link
                href="https://thewrightdesigns.co.za"
                aria-label="The Wright Designs"
                className="text-[14px] font-light hover:opacity-80 ease-in-out duration-200 text-linkBlue"
                target="_blank"
              >
                The Wright Designs
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center col-span-2 place-self-center border-t-2 border-grey/25 w-full mt-6">
          <h4
            className="font-light pt-5 text-[14px]"
            style={{ fontVariant: "normal" }}
          >
            © Arlene's Pool Services |{" "}
            <Link
              href="/"
              className="text-[14px] hover:opacity-80 ease-in-out duration-200 text-linkBlue"
              style={{ fontVariant: "normal" }}
            >
              www.arlenespools.co.za
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}
