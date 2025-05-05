import SectionHeading from "@/_components/ui/section-headings";
import MeetTheTeamDesktop from "./meet-the-team-desktop";
import MeetTheTeamMobile from "./meet-the-team-mobile";
import { fetchTeamData } from "@/_actions/wordpress-actions";

interface TeamMember {
  name: string;
  image: number;
  imageUrl: string;
}

const teamDataPromise = fetchTeamData();

const MeetTheTeamSection = async () => {
  const teamData = await teamDataPromise;

  return (
    <section className="flex flex-col gap-10 px-5 py-10 tablet:px-10 overflow-hidden desktop:py-5">
      <SectionHeading>Meet The Team</SectionHeading>
      <div className="tablet:overflow-hidden desktop:hidden">
        <MeetTheTeamMobile data={teamData} cssClasses="w-full" />
      </div>
      <MeetTheTeamDesktop data={teamData} cssClasses="hidden desktop:grid" />
    </section>
  );
};

export default MeetTheTeamSection;
