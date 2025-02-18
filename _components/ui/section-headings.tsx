import classNames from "classnames";

interface HeadingProps {
  h2?: boolean;
  h3?: boolean;
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
        "border-y-4 py-2 text-center desktop:text-left desktop:w-full desktop:pb-3 desktop:border-b-4 desktop:border-t-0 desktop:pt-0",
        { "border-blue": borderBlue, "border-lightBlue": !borderBlue },
        cssClasses
      )}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
