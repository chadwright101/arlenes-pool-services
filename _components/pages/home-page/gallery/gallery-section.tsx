"use client";

import { useEffect, useState } from "react";

import classNames from "classnames";

import SectionHeading from "@/_components/ui/section-headings";
import GallerySlider from "./gallery-slider";
import { fetchGalleryData } from "@/_actions/wordpress-actions";

import { GalleryProps } from "@/_types/wordpress-types";

interface GallerySectionProps {
  cssClasses?: string;
}

const GallerySection = ({ cssClasses }: GallerySectionProps) => {
  const [galleryData, setGalleryData] = useState<GalleryProps[]>([]);
  const [showLoadingState, setShowLoadingState] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGalleryData();
        setGalleryData(data);
        setShowLoadingState(false);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      className={classNames(
        "grid gap-10 px-5 tablet:px-10 py-5 desktop:py-0",
        cssClasses
      )}
    >
      <SectionHeading>Gallery</SectionHeading>
      <div className="overflow-hidden desktop:hidden">
        {!showLoadingState ? (
          <GallerySlider data={galleryData} />
        ) : (
          <div className="grid place-items-center min-h-[400px] max-h-[500px]">
            <div className="spinner-large" />
          </div>
        )}
      </div>
      <div className="hidden overflow-hidden desktop:block">
        {!showLoadingState ? (
          <GallerySlider desktop data={galleryData} />
        ) : (
          <div className="grid place-items-center h-[440px]">
            <div className="spinner-large" />
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
