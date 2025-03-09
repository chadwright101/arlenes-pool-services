"use client";

import { useState } from "react";
import Link from "next/link";

import {
  fetchEmailAddress,
  fetchPhoneNumber,
} from "@/_actions/contact-actions";
import ContactForm from "./contact-form";
import Image from "next/image";
import SectionHeading from "@/_components/ui/section-headings";
import SocialIcons from "@/_lib/utils/social-icons";

const ContactSection = () => {
  const [showPhone, setShowPhone] = useState("Show phone number");
  const [showEmail, setShowEmail] = useState("Show email address");
  const [showspinnerPhone, setShowspinnerPhone] = useState(false);
  const [showspinnerEmail, setShowspinnerEmail] = useState(false);

  const handleShowPhoneNumber = async () => {
    setShowspinnerPhone(true);
    const phoneNumber = await fetchPhoneNumber();
    setShowPhone(phoneNumber);
    setShowspinnerPhone(false);
  };

  const handleShowEmailAddress = async () => {
    setShowspinnerEmail(true);
    const emailAddress = await fetchEmailAddress();
    setShowEmail(emailAddress);
    setShowspinnerEmail(false);
  };

  return (
    <section className="grid gap-10 px-5 pt-10 tablet:px-10 desktop:grid-cols-2">
      <div className="grid gap-10 place-items-center phone:place-items-start">
        <SectionHeading>Contact</SectionHeading>
        <div className="grid gap-5">
          <div className="grid gap-3 items-center phone:grid-cols-[60px_1fr]">
            <h3 className="text-subheading text-center tablet:text-left">
              Email:
            </h3>
            {showEmail === "Show email address" ? (
              <button
                onClick={handleShowEmailAddress}
                className="text-paragraph text-linkBlue text-center py-3 px-2 -my-3 -mx-2 phone:text-left hover:cursor-pointer phone:self-start tablet:p-0 tablet:m-0 italic text-link tablet:hover:text-black/80"
                aria-label="Show email address"
              >
                {showspinnerEmail ? (
                  <div className="mx-auto spinner-contact phone:mx-0"></div>
                ) : (
                  showEmail
                )}
              </button>
            ) : (
              <Link
                href={`mailto:${showEmail}`}
                className="text-paragraph text-center text-linkBlue phone:text-left tablet:hover:text-pink text-link tablet:hover:text-black/80"
              >
                {showEmail}
              </Link>
            )}
          </div>
          <div className="grid gap-3 items-center phone:grid-cols-[60px_1fr]">
            <h3 className="text-subheading text-center tablet:text-left">
              Phone:
            </h3>
            {showPhone === "Show phone number" ? (
              <button
                onClick={handleShowPhoneNumber}
                className="text-paragraph text-linkBlue text-center py-3 px-2 -my-3 -mx-2 hover:cursor-pointer phone:text-left tablet:p-0 tablet:m-0 italic text-link tablet:hover:text-black/80"
                aria-label="Show phone number"
              >
                {showspinnerPhone ? (
                  <div className="mx-auto spinner-contact phone:mx-0"></div>
                ) : (
                  showPhone
                )}
              </button>
            ) : (
              <Link
                href={`tel:${showPhone}`}
                className="text-paragraph text-center text-linkBlue phone:text-left tablet:hover:text-pink text-link tablet:hover:text-black/80"
              >
                {showPhone}
              </Link>
            )}
          </div>
        </div>
        <SocialIcons />
        <div className="bg-blue rounded-[6px] p-5 w-full">
          <ContactForm />
        </div>
      </div>
      <Image
        src="/images/contact-image.jpg"
        alt="Arlene Pool Services"
        width={620}
        height={800}
        className="hidden desktop:block h-full w-full object-cover"
      />
    </section>
  );
};

export default ContactSection;
