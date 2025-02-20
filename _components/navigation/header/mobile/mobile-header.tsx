"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { X } from "lucide-react";

import navData from "@/_data/nav-data.json";
import classNames from "classnames";

export interface HeaderProps {
  isScrolled: boolean;
}

export function MobileHeader({ isScrolled }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="relative px-5 pt-2.5 pb-[22px] phone:pb-7 min-[540px]:pb-10 tablet:pb-14 tablet:px-10 min-[1000px]:pb-16 desktop:hidden">
      <div
        className={classNames(
          "flex w-full items-center justify-between ease-in-out duration-500",
          {
            "translate-y-3 phone:translate-y-[18px] min-[540px]:translate-y-6 tablet:translate-y-[42px] min-[1000px]:translate-y-[50px]":
              isScrolled,
          }
        )}
      >
        <Link href="/" className="flex gap-1 items-center">
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
            <span className="text-[14.5px] font-light -mt-1">
              Pool Services
            </span>
          </h1>
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          className={classNames(
            "ease-in-out duration-300 -m-3 translate-y-1.5 p-3",
            {
              "-mt-[17px]": isScrolled,
            }
          )}
          aria-label="Open menu"
        >
          <Image src="/icons/menu.svg" alt="Open menu" width={24} height={16} />
        </button>
      </div>

      {/* Slide-out Menu */}
      <div
        className={classNames(
          "fixed inset-0 z-50 transform bg-blue transition-transform duration-300 ease-in-out",
          {
            "translate-x-full": !isOpen,
          }
        )}
      >
        <div className="flex py-5 items-center justify-end px-5">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="-mr-3 -mt-1"
          >
            <X color="#FFFFFF" className="h-12 w-12 p-2" strokeWidth={2} />
          </button>
        </div>
        <nav className="px-5">
          <ul className="grid gap-5">
            {navData.map(({ title, url }, id) => {
              return (
                <li key={id}>
                  <Link
                    href={url}
                    onClick={() => setIsOpen(false)}
                    className="text-[20px] text-white font-normal p-3 -m-3"
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <Image
        src="/graphics/water.webp"
        alt="Water graphic"
        width={1280}
        height={107}
        className={classNames(
          "absolute -mx-5 top-14 -z-10 object-cover ease-in-out duration-[750ms] tablet:-mx-10",
          {
            "translate-y-12 tablet:translate-y-16": isScrolled,
          }
        )}
        sizes="100vw"
      />
    </div>
  );
}
