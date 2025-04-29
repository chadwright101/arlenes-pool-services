export interface GalleryProps {
  acf: {
    photo_gallery: {
      gallery: {
        full_image_url: string;
      }[][];
    };
  };
}
