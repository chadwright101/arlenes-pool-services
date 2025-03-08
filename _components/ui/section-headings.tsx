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
        "border-y-4 pt-2 pb-2.5 text-center mx-auto tablet:text-left tablet:w-full tablet:pb-3 tablet:border-b-4 tablet:border-t-0 tablet:pt-0",
        { "border-blue": borderBlue, "border-lightBlue": !borderBlue },
        cssClasses
      )}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
