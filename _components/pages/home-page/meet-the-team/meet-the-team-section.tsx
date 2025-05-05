import SectionHeading from "@/_components/ui/section-headings";
import MeetTheTeamDesktop from "./meet-the-team-desktop";
import MeetTheTeamMobile from "./meet-the-team-mobile";
import { getWordpressDetails } from "@/_actions/wordpress-actions";

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
      next: { revalidate: 60 },
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

async function getMediaDetails(
  imageIds: number[]
): Promise<Record<number, string>> {
  if (!imageIds.length) return {};

  try {
    const res = await fetch(
      `https://wordpress.arlenespools.co.za/wp-json/wp/v2/media?include=${imageIds.join(
        ","
      )}`,
      {
        cache: "no-store",
        headers: {
          Authorization: `Basic ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch media data:", res.status, res.statusText);
      return {};
    }

    const mediaData = await res.json();

    const imageLookup: Record<number, string> = {};
    mediaData.forEach((media: any) => {
      imageLookup[media.id] =
        media.source_url ||
        media.media_details?.sizes?.full?.source_url ||
        media.media_details?.sizes?.large?.source_url ||
        "";
    });

    return imageLookup;
  } catch (error) {
    console.error("Error fetching media details:", error);
    return {};
  }
}

async function fetchTeamData() {
  try {
    const staffData = await getStaffData();
    const staffList = staffData[0]?.acf || {};

    const staffMembers = Object.values(staffList) as StaffMember[];

    const imageIds = staffMembers.map((member) => member.image).filter(Boolean);

    const imageLookup = await getMediaDetails(imageIds);

    if (Object.keys(imageLookup).length === 0) {
      for (const id of imageIds) {
        try {
          const directRes = await fetch(
            `https://wordpress.arlenespools.co.za/wp-json/wp/v2/media/${id}`,
            {
              cache: "no-store",
              headers: {
                Authorization: `Basic ${authToken}`,
                "Content-Type": "application/json",
              },
            }
          );

          if (directRes.ok) {
            const mediaItem = await directRes.json();
            imageLookup[id] = mediaItem.source_url || "";
            console.log(
              `Successfully fetched image ID ${id}: ${imageLookup[id]}`
            );
          } else {
            console.error(
              `Failed to fetch image ID ${id}: ${directRes.status}`
            );
          }
        } catch (err) {
          console.error(`Error fetching image ID ${id}:`, err);
        }
      }
    }

    const teamMembers: TeamMember[] = staffMembers.map((member) => {
      const imageUrl = imageLookup[member.image] || "";

      if (!imageUrl) {
        console.log(
          `No image URL found for ${member.name} (ID: ${member.image})`
        );
      }

      return {
        name: member.name,
        image: member.image,
        imageUrl,
      };
    });

    return teamMembers;
  } catch (error) {
    console.error("Error in fetchTeamData:", error);
    return [];
  }
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
