export interface GalleryImage {
  full_image_url: string;
  original_image_url?: string;
  desktop_image_url?: string;
}

export interface GalleryProps {
  acf: {
    photo_gallery: {
      gallery: GalleryImage[][];
    };
  };
}
