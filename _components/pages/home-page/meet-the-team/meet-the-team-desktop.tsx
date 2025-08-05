import Image from "next/image";

import classNames from "classnames";

interface MeetTheTeamProps {
  cssClasses?: string;
  data: Array<{ name: string; image: number; imageUrl: string }>;
}

const MeetTheTeamDesktop = ({ cssClasses, data }: MeetTheTeamProps) => {
  return (
    <ul className={classNames("grid grid-cols-6 gap-10", cssClasses)}>
      {data
        .filter(({ imageUrl }) => imageUrl)
        .map(({ name, imageUrl }, index) => (
          <li
            key={index}
            className={classNames("flex flex-col gap-5", {
              "col-span-3 row-span-3": name === "Arlene Wallace",
            })}
          >
            <p className="text-subheading">{name}</p>
            <div className="h-full">
              <Image
                src={imageUrl}
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
