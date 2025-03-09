"use client";

import { useEffect, useState } from "react";

import classNames from "classnames";

import Recaptcha from "@/_lib/recaptcha";
import { sendEmail } from "@/_actions/send-email-actions";
import ButtonType from "@/_components/ui/buttons/button-type";

const ContactForm = () => {
  const [submissionStartTime, setSubmissionStartTime] = useState(0);
  const [validateRecaptcha, setValidateRecaptcha] = useState(true);
  const [showEmailSubmitted, setShowEmailSubmitted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const startSubmissionTimer = () => {
      setSubmissionStartTime(new Date().getTime());
    };
    startSubmissionTimer();
    if (showEmailSubmitted) {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showEmailSubmitted]);

  const handleRecaptchaChange = (value: any) => {
    if (value === null) {
      setValidateRecaptcha(false);
      console.log("Recaptcha expired");
    } else {
      const elapsedTime = new Date().getTime() - submissionStartTime;
      if (elapsedTime < 3000) {
        console.error("Form submitted too quickly. Possible bot activity.");
        return;
      } else {
        setValidateRecaptcha(!!value);
      }
    }
  };

  return (
    <div>
      {!showEmailSubmitted && (
        <p className="mb-5 text-white tablet:text-left">
          Please fill out the form below and we will be in touch ASAP...
        </p>
      )}
      {showEmailSubmitted ? (
        <>
          <p className="text-[20px] text-center text-white tablet:text-left pb-5">
            Your email has been sent, we will be in touch soon.
          </p>
        </>
      ) : (
        <form
          className="flex flex-col gap-10"
          action={async (formData) => {
            await sendEmail(formData);
            setShowEmailSubmitted(true);
          }}
        >
          <input type="hidden" name="_honey" className="hidden" />
          <label
            htmlFor="fullName"
            className="grid gap-4 text-subheading text-white"
          >
            Name*:
            <input
              type="text"
              id="fullName"
              name="name"
              className="border border-black/50 bg-white h-10 py-4 px-3 rounded font-light"
              placeholder="Name goes here..."
              autoComplete="name"
              required
            />
          </label>
          <label
            htmlFor="emailAddress"
            className="grid gap-4 text-subheading text-white"
          >
            Email*:
            <input
              type="email"
              id="emailAddress"
              name="email"
              className="border border-black/50 bg-white h-10 py-4 px-3 rounded font-light"
              placeholder="Email address goes here..."
              autoComplete="email"
              required
            />
          </label>
          <label
            htmlFor="emailAddress"
            className="grid gap-4 text-subheading text-white"
          >
            Phone:
            <input
              type="tel"
              id="phoneNumber"
              name="phone"
              className="border border-black/50 bg-white h-10 py-4 px-3 rounded font-light"
              placeholder="Phone number goes here..."
              autoComplete="phone"
            />
          </label>

          {!showMessage ? (
            <ButtonType
              type="button"
              cssClasses="tablet:self-start"
              onClick={() => setShowMessage(true)}
              colorWhite
            >
              Next
            </ButtonType>
          ) : (
            <>
              <label
                htmlFor="message"
                className="grid gap-4 text-subheading text-white"
              >
                Message:
                <textarea
                  id="message"
                  name="message"
                  className="border border-black/50 rounded bg-white py-4 px-3 font-light"
                  rows={5}
                  placeholder="Message goes here..."
                  required
                ></textarea>
              </label>
              <ButtonType
                type="submit"
                colorWhite
                cssClasses={classNames("tablet:self-start", {
                  "opacity-75 desktop:cursor-not-allowed": !validateRecaptcha,
                  "hover:desktop:opacity-90": validateRecaptcha,
                })}
                disabled={!validateRecaptcha}
              >
                Submit
              </ButtonType>
              {!validateRecaptcha && (
                <Recaptcha onChange={handleRecaptchaChange} />
              )}
            </>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactForm;
