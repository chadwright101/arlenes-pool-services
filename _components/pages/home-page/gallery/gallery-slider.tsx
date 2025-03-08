"use client";

import { SetStateAction, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

interface Props {
  cssClasses?: string;
  desktop?: boolean;
  data: string[];
}

const GallerySlider = ({ cssClasses, desktop, data }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper: {
    activeIndex: SetStateAction<number>;
  }) => {
    setCurrentIndex(swiper.activeIndex);
  };

  if (desktop) {
    return (
      <>
        <Swiper
          onSlideChange={handleSlideChange}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          speed={1000}
          modules={[Autoplay, Navigation, Pagination]}
          pagination={{
            dynamicBullets: true,
          }}
          className={cssClasses}
          slidesPerView={2}
          spaceBetween={40}
          loop
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {data.map((slide, index) => (
            <SwiperSlide key={index} className="mb-10">
              <Image
                src={slide}
                alt={`Arlene's Pool Services - Gallery Image ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </SwiperSlide>
          ))}
          <button
            className="swiper-button-prev absolute top-[43%] z-10 left-[40px] cursor-pointer grid place-items-center rounded-full bg-white/[90%] w-[50px] h-[50px] hover:bg-white ease-in-out duration-300"
            aria-label="Show previous image"
          >
            <svg
              width="12"
              height="21"
              viewBox="0 0 12 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="-ml-0.5"
            >
              <path
                d="M10.1125 20.5L0.112549 10.5L10.1125 0.5L11.8875 2.275L3.66255 10.5L11.8875 18.725L10.1125 20.5Z"
                fill="#4079B7"
              />
            </svg>
          </button>
          <button
            className="swiper-button-next absolute top-[43%] z-10 right-[40px] cursor-pointer grid place-items-center rounded-full bg-white/[90%] w-[50px] h-[50px] hover:bg-white ease-in-out duration-300"
            aria-label="Show next image"
          >
            <svg
              width="12"
              height="21"
              viewBox="0 0 12 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="-mr-0.5"
            >
              <path
                d="M1.88751 0.499999L11.8875 10.5L1.88751 20.5L0.112512 18.725L8.33751 10.5L0.112513 2.275L1.88751 0.499999Z"
                fill="#4079B7"
              />
            </svg>
          </button>
        </Swiper>
      </>
    );
  } else {
    return (
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        spaceBetween={20}
        speed={1000}
        modules={[Autoplay, Pagination]}
        className={cssClasses}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop
        breakpoints={{
          800: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index} className="pb-10">
            <Image
              src={slide}
              alt={`Arlene's Pool Services - Gallery Image ${index + 1}`}
              width={800}
              height={800}
              className="aspect-square object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
};

export default GallerySlider;
