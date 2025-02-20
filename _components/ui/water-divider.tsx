import classNames from "classnames";
import Image from "next/image";

interface WaterDividerProps {
  flip?: boolean;
  cssClasses?: string;
}

const WaterDivider = ({ flip, cssClasses }: WaterDividerProps) => {
  return (
    <div className="my-10 desktop:my-15">
      <Image
        src="/graphics/water.webp"
        alt=""
        width={1280}
        height={214}
        className={classNames(
          "w-full",
          {
            "scale-x-[-1]": flip,
          },
          cssClasses
        )}
      />
    </div>
  );
};

export default WaterDivider;
