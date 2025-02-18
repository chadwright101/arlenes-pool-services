import classNames from "classnames";

export const buttonStyles = (
  colorWhite?: boolean,
  cssClasses?: string,
  disabled?: boolean,
  pending?: boolean
) =>
  classNames(
    "flex subheading text-center py-1.5 px-4 justify-center duration-500 border-4 rounded-[6px] font-bold min-w-[100px]",
    cssClasses,
    {
      "desktop:hover:bg-transparent desktop:hover:text-black":
        !colorWhite && !disabled && !pending,
      "bg-white border-white": colorWhite,
      "bg-lightBlue border-lightBlue text-white": !colorWhite,
      "desktop:hover:bg-blue desktop:hover:border-white desktop:hover:text-white":
        colorWhite && !disabled && !pending,
      "opacity-50 cursor-not-allowed hover:none": pending,
    }
  );
