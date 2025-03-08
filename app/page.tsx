import AboutSection from "@/_components/pages/home-page/about-section";
import HeroSection from "@/_components/pages/home-page/hero-section";
import MeetTheTeamSection from "@/_components/pages/home-page/meet-the-team/meet-the-team-section";
import ServicesSection from "@/_components/pages/home-page/services/services-section";
import WaterDivider from "@/_components/ui/water-divider";

export default function Home() {
  return (
    <div>
      <HeroSection cssClasses="h-[600px] w-full object-cover max-w-[1280px] desktop:mx-auto" />
      <AboutSection />
      <ServicesSection />
      <WaterDivider flip />
      <MeetTheTeamSection />
    </div>
  );
}
