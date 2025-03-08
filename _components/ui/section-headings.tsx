import classNames from "classnames";

interface HeadingProps {
  children: React.ReactNode;
  borderBlue?: boolean;
  cssClasses?: string;
}

const SectionHeading = ({
  children,
  borderBlue = true,
  cssClasses,
}: HeadingProps) => {
  return (
    <h2
      className={classNames(
        "border-y-4 pt-2 pb-2.5 text-center mx-auto desktop:text-left desktop:w-full desktop:pb-3 desktop:border-b-4 desktop:border-t-0 desktop:pt-0",
        { "border-blue": borderBlue, "border-lightBlue": !borderBlue },
        cssClasses
      )}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
