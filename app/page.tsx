import AboutSection from "@/_components/pages/home-page/about-section";
import GallerySection from "@/_components/pages/home-page/gallery/gallery-section";
import HeroSection from "@/_components/pages/home-page/hero-section";
import MeetTheTeamSection from "@/_components/pages/home-page/meet-the-team/meet-the-team-section";
import ServicesSection from "@/_components/pages/home-page/services/services-section";
import WaterDivider from "@/_components/ui/water-divider";

export default function Home() {
  return (
    <div>
      <HeroSection cssClasses="h-[600px] w-full object-cover" />
      <div className="-translate-y-[70px] tablet:-translate-y-20" id="about" />
      <AboutSection />
      <WaterDivider />
      <div
        className="-translate-y-28 tablet:-translate-y-28 desktop:-translate-y-36"
        id="services"
      />
      <ServicesSection />
      <WaterDivider flip />
      <div
        className="-translate-y-28 tablet:-translate-y-28 desktop:-translate-y-36"
        id="gallery"
      />
      <GallerySection />
      <WaterDivider cssClasses="desktop:hidden" />
      <div className="-translate-y-28 tablet:-translate-y-28" id="team" />
      <MeetTheTeamSection />
    </div>
  );
}
