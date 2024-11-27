"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../app/globals.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Hero from './Hero';

export default function SwiperDemo() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper text-[#46A358]"
      >
        <SwiperSlide><Hero/></SwiperSlide>
        <SwiperSlide><Hero/></SwiperSlide>
        <SwiperSlide><Hero/></SwiperSlide>
      </Swiper>
    </>
  );
}