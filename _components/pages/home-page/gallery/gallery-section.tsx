"use client";

import SectionHeading from "@/_components/ui/section-headings";
import GallerySlider from "./gallery-slider";

import galleryData from "@/_data/general-data.json";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { GalleryProps } from "@/_types/wordpress-types";
import { getWordpressDetails } from "@/_actions/wordpress-actions";

interface GallerySectionProps {
  cssClasses?: string;
}

const GallerySection = ({ cssClasses }: GallerySectionProps) => {
  const [galleryData, setGalleryData] = useState<GalleryProps[]>([]);
  const [showLoadingState, setShowLoadingState] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { username, password, slideshow } = await getWordpressDetails();

      const authToken = btoa(`${username}:${password}`);

      try {
        const response = await fetch(
          `https://wordpress.arlenespools.co.za/wp-json/wp/v2/${slideshow}`,
          {
            headers: {
              Authorization: `Basic ${authToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        setGalleryData(data);
        setShowLoadingState(false);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("Gallery Data:", galleryData);
  }, [galleryData]);

  return (
    <section
      className={classNames(
        "grid gap-10 px-5 tablet:px-10 py-5 desktop:py-0",
        cssClasses
      )}
    >
      <SectionHeading>Gallery</SectionHeading>
      <div className="overflow-hidden desktop:hidden">
        <GallerySlider data={galleryData} />
      </div>
      <div className="hidden overflow-hidden desktop:block">
        <GallerySlider desktop data={galleryData} />
      </div>
    </section>
  );
};

export default GallerySection;
