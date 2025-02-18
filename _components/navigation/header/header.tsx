"use client";

import { useEffect, useState } from "react";

import classNames from "classnames";

import useScrollPosition from "@/_lib/hooks/scroll-position";

import { MobileHeader } from "./mobile/mobile-header";
import { DesktopHeader } from "./desktop/desktop-header";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [scrollPosition]);

  return (
    <header
      className={classNames(
        "sticky top-0 left-0 max-w-[1280px] mx-auto border-b-8 bg-white border-white z-50 ease-in-out duration-300 overflow-y-hidden",
        {
          "-top-4": isScrolled,
        }
      )}
    >
      <div className="max-w-[1280px] mx-auto relative">
        <MobileHeader isScrolled={isScrolled} />
        <DesktopHeader isScrolled={isScrolled} />
      </div>
      <Image
        src="/graphics/water.webp"
        alt="Water graphic"
        width={2560}
        height={85}
        className={classNames(
          "hidden desktop:block absolute top-14 -z-10 object-cover ease-in-out duration-500",
          {
            "translate-y-10": isScrolled,
          }
        )}
        sizes="100vw"
      />
    </header>
  );
}
