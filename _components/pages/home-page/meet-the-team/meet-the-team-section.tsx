import SectionHeading from "@/_components/ui/section-headings";
import MeetTheTeamDesktop from "./meet-the-team-desktop";
import MeetTheTeamMobile from "./meet-the-team-mobile";
import { getWordpressDetails } from "@/_actions/wordpress-actions";
import { use } from "react";

interface StaffMember {
  name: string;
  image: number;
}

interface TeamMember {
  name: string;
  image: number;
  imageUrl: string;
}

const { username, password } = await getWordpressDetails();
const authToken = btoa(`${username}:${password}`);

async function getStaffData() {
  const res = await fetch(
    "https://wordpress.arlenespools.co.za/wp-json/wp/v2/staff",
    {
      next: { revalidate: 1 },
      headers: {
        Authorization: `Basic ${authToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch staff data");
  }

  return res.json();
}

async function fetchTeamData() {
  const staffData = await getStaffData();
  const staffList = staffData[0]?.acf || {};

  const staffMembers: StaffMember[] = Object.values(staffList);

  const teamMembers: TeamMember[] = staffMembers.map((member) => {
    const formattedName = member.name.replace(/\s+/g, "-");

    const imageUrl = `https://wordpress.arlenespools.co.za/wp-content/uploads/2025/04/${formattedName}.jpg`;

    return {
      name: member.name,
      image: member.image,
      imageUrl: imageUrl,
    };
  });

  return teamMembers;
}

const teamDataPromise = fetchTeamData();

const MeetTheTeamSection = () => {
  const teamData = use(teamDataPromise);

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
