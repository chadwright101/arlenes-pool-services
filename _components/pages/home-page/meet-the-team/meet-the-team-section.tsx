import SectionHeading from "@/_components/ui/section-headings";
import MeetTheTeamDesktop from "./meet-the-team-desktop";
import MeetTheTeamMobile from "./meet-the-team-mobile";

import teamData from "@/_data/general-data.json";

const { meetTheTeam } = teamData;

const MeetTheTeamSection = () => {
  return (
    <section className="flex flex-col gap-10 px-5 py-10 tablet:px-10 overflow-hidden desktop:py-5">
      <SectionHeading>Meet The Team</SectionHeading>
      <div className="tablet:overflow-hidden desktop:hidden">
        <MeetTheTeamMobile data={meetTheTeam} cssClasses="w-full" />
      </div>
      <MeetTheTeamDesktop cssClasses="hidden desktop:grid" />
    </section>
  );
};

export default MeetTheTeamSection;
