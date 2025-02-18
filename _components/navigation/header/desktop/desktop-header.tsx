import Image from "next/image";
import Link from "next/link";

import navData from "@/_data/nav-data.json";
import { HeaderProps } from "../mobile/mobile-header";
import classNames from "classnames";

export function DesktopHeader({ isScrolled }: HeaderProps) {
  return (
    <div
      className={classNames(
        "hidden relative pt-5 pb-[76px] px-15 items-end justify-between desktop:flex ease-in-out duration-300 overflow-hidden desktop:duration-500",
        {
          "translate-y-[60px]": isScrolled,
        }
      )}
    >
      <Link
        href="/"
        className="flex gap-1 items-center hover:opacity-90 ease-in-out duration-500"
      >
        <Image
          src="/images/arlenes-pool-services-logo.png"
          alt="Arlene's Pool Services"
          width={52.12}
          height={48}
          priority
          className="ease-in-out duration-300 h-12 w-auto"
        />
        <h1 className="text-[20px] font-bold flex flex-col mt-2">
          Arlene's{" "}
          <span className="text-[14.5px] font-light -mt-1">Pool Services</span>
        </h1>
      </Link>
      <nav
        className={classNames("ease-in-out duration-300", {
          "translate-y-1.5": isScrolled,
        })}
      >
        <ul className="flex gap-2.5 items-center">
          {navData.map(({ title, url }, id) => {
            return (
              <li key={id}>
                <Link
                  href={url}
                  className="text-paragraph ease-in-out duration-200 hover:text-blue"
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
