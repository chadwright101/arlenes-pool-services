import Image from "next/image";

import teamData from "@/_data/general-data.json";
import classNames from "classnames";

const { meetTheTeam } = teamData;

interface MeetTheTeamProps {
  cssClasses?: string;
}

const MeetTheTeamDesktop = ({ cssClasses }: MeetTheTeamProps) => {
  return (
    <ul className={classNames("grid grid-cols-6 gap-10", cssClasses)}>
      {meetTheTeam.map(({ image, name }, index) => (
        <li
          key={index}
          className={classNames("flex flex-col gap-5", {
            "col-span-3 row-span-3": name === "Arlene Wallace",
          })}
        >
          <p className="text-subheading">{name}</p>
          <div className="h-full">
            <Image
              src={image}
              alt={`${name} - Arlene's Pool Services`}
              width={640}
              height={800}
              className="object-cover h-full w-full"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MeetTheTeamDesktop;
