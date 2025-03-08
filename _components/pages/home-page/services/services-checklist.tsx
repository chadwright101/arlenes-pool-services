import servicesData from "@/_data/general-data.json";
import Image from "next/image";

const {
  services: { cleaningChecklist, checks, jacuzzi, covers },
} = servicesData;

const ServicesChecklist = () => {
  return (
    <article>
      <ul className="grid gap-5 h-[585px] overflow-y-scroll bg-[#FCFCFC] py-7 pl-5 pr-7 border border-[#94A3B8]/25 drop-shadow-lg tablet:overflow-auto tablet:h-auto tablet:grid-cols-2 tablet:gap-x-10">
        <li className="font-normal flex flex-col gap-5">
          Cleaning checklist
          <ul className="flex flex-col gap-3">
            {cleaningChecklist.map((item, index) => (
              <li key={index} className="flex justify-between gap-5">
                {item}
                <Image
                  src="/icons/check-circle.svg"
                  alt="Check mark icon"
                  width={20}
                  height={20}
                />
              </li>
            ))}
          </ul>
        </li>
        <div className="grid gap-5">
          <li className="font-normal flex flex-col gap-5">
            Checks
            <ul className="flex flex-col gap-3">
              {checks.map((item, index) => (
                <li key={index} className="flex justify-between gap-5">
                  {item}
                  <Image
                    src="/icons/check-circle.svg"
                    alt="Check mark icon"
                    width={20}
                    height={20}
                  />
                </li>
              ))}
            </ul>
          </li>
          <li className="font-normal flex flex-col gap-5">
            Covers
            <ul className="flex flex-col gap-3">
              {covers.map((item, index) => (
                <li key={index} className="flex justify-between gap-5">
                  {item}
                  <Image
                    src="/icons/check-circle.svg"
                    alt="Check mark icon"
                    width={20}
                    height={20}
                  />
                </li>
              ))}
            </ul>
          </li>
          <li className="font-normal flex flex-col gap-5">
            Jacuzzi
            <ul className="flex flex-col gap-3">
              {jacuzzi.map((item, index) => (
                <li key={index} className="flex justify-between gap-5">
                  {item}
                  <Image
                    src="/icons/check-circle.svg"
                    alt="Check mark icon"
                    width={20}
                    height={20}
                  />
                </li>
              ))}
            </ul>
          </li>
        </div>
      </ul>
    </article>
  );
};

export default ServicesChecklist;
