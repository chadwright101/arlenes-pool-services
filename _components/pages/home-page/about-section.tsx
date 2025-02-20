import ButtonLink from "@/_components/ui/buttons/button-link";
import SectionHeading from "@/_components/ui/section-headings";
import Image from "next/image";

const AboutSection = () => {
  return (
    <main className="grid gap-10 px-5 py-10 tablet:grid-cols-2 tablet:px-10 desktop:grid-cols-[2fr_1fr]">
      <div className="flex gap-10 flex-col tablet:justify-between">
        <div className="grid gap-10">
          <SectionHeading cssClasses="place-self-center tablet:text-left tablet:w-full tablet:pb-3 tablet:border-b-4 tablet:border-t-0 tablet:pt-0">
            About Us
          </SectionHeading>
          <p>
            Since January 1999, Arlene has transformed a modest three-pool
            business into a thriving enterprise. Today, the company manages
            almost <span className="font-bold">500 pools</span> along the Garden
            Route, supported by a dedicated team of{" "}
            <span className="font-bold">9 professional staff</span> and a fleet
            of <span className="font-bold">5 vehicles and a Tuk Tuk</span>.
            Arlene's entrepreneurial journey demonstrates steady growth and
            commitment to excellence in pool services.
          </p>
        </div>
        <ButtonLink href="/#contact" cssClasses="desktop:place-self-start">
          Get In Touch
        </ButtonLink>
      </div>
      <div>
        <Image
          src="/images/placeholder.png"
          alt="Arlene's Pool Services"
          width={800}
          height={800}
          sizes="(max-width: 800px) 100vw, 33vw"
          className="h-full w-full object-cover tablet:aspect-[4/3] desktop:aspect-video"
        />
      </div>
    </main>
  );
};

export default AboutSection;
