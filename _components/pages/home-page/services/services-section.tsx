import SectionHeading from "@/_components/ui/section-headings";
import ServicesChecklist from "./services-checklist";

const ServicesSection = () => {
  return (
    <section className="grid gap-10 px-5 py-10">
      <SectionHeading>Services</SectionHeading>
      <h3 className="hidden tablet:block">Our Maintenance Side Of Life</h3>
      <div className="grid gap-10 tablet:grid-cols-[480px_1fr]">
        <ServicesChecklist />
        <h3 className="text-center tablet:hidden">
          Our Maintenance Side Of Life
        </h3>
        <div className="flex flex-col gap-10 tablet:order-first">
          <p className="text-center tablet:text-left">
            As part of our normal maintenance service, we check and balance the
            chemicals in the pool, including pH levels, chlorine, alkalinity and
            ppm salt for salt water (chlorinated) pools.
          </p>
          <p className="text-center tablet:text-left">
            The correct chemical balance is essential to keep our clients&apos;
            pool safe and sanitised for healthy swimming. During our service our
            teams will clean the pool thoroughly which includes netting leaves,
            brushing walls and cleaning scumline. Weir baskets and pump baskets
            are checked and cleaned. Pools and rimflows are vacuumed, filters
            backwash and cleaned.
          </p>
          <p className="text-center tablet:text-left">
            In addition, we offer the services of cleaning jacuzzi&apos;s.
          </p>
          <p className="text-center tablet:text-left">
            Regular maintenance and equipment checks can identify and address
            minor issues before they become major problems, saving the client
            money on costly repairs. It can improve energy efficiency. Each
            visit by our team includes checking timers, chlorinators and any
            leaks on pool equipment. At our client&apos;s request we switch
            heaters and solar panels on/off.
          </p>
        </div>
      </div>
      <h3 className="text-center tablet:text-left">Filtration Systems</h3>
      <p className="text-center tablet:text-left">
        In addition our company offers the services of a professional
        experienced technician, to handle repair work on filtration system. This
        includes installation of heat pumps, pool pumps, filters, and salt water
        chlorinators. We also offer pool pump repairs.
      </p>
      <p className="text-center tablet:text-left">
        Our friendly staff at our premises in Green Point Avenue will gladly
        assist with testing your pool water and giving you experienced advise on
        how to adjust the chemical levels in your pool.
      </p>
      <p className="text-center tablet:text-left">
        We also offer repairs to pool cleaners and salt water chlorinators.
      </p>
    </section>
  );
};

export default ServicesSection;
