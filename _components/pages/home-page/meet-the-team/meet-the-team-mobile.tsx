"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Props {
  cssClasses?: string;
  data: Array<{ name: string; image: string }>;
}

const MeetTheTeamMobile = ({ cssClasses, data }: Props) => {
  return (
    <Swiper
      speed={1000}
      modules={[Pagination]}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      className={cssClasses}
      slidesPerView={"auto"}
      slidesPerGroup={1}
      spaceBetween={12}
      breakpoints={{
        425: {
          spaceBetween: 20,
        },
      }}
      style={
        {
          "--swiper-pagination-color": "#4079B7",
          "--swiper-pagination-bullet-inactive-color": "#4079B7",
          "--swiper-pagination-bullet-inactive-opacity": "0.8",
          "--swiper-pagination-bullet-size": "10px",
        } as React.CSSProperties
      }
    >
      {data.map(({ image, name }, index) => (
        <SwiperSlide
          key={index}
          className="max-w-[280px] h-auto pb-10 tablet:pb-10"
        >
          <h4 className="mb-2 text-center">{name}</h4>
          <Image
            src={image}
            alt={`${name} - Arlene's Pool Services`}
            width={280}
            height={280}
            sizes="(max-width: 600px) 100vw, 50vw"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MeetTheTeamMobile;
