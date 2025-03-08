import SectionHeading from "@/_components/ui/section-headings";
import GallerySlider from "./gallery-slider";

import galleryData from "@/_data/general-data.json";
import classNames from "classnames";

const { gallery } = galleryData;

interface GallerySectionProps {
  cssClasses?: string;
}

const GallerySection = ({ cssClasses }: GallerySectionProps) => {
  return (
    <section
      className={classNames(
        "grid gap-10 px-5 tablet:px-10 py-5 desktop:py-0",
        cssClasses
      )}
    >
      <SectionHeading>Gallery</SectionHeading>
      <div className="overflow-hidden desktop:hidden">
        <GallerySlider data={gallery} />
      </div>
      <div className="hidden overflow-hidden desktop:block">
        <GallerySlider desktop data={gallery} />
      </div>
    </section>
  );
};

export default GallerySection;
