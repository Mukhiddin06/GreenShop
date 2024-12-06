import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './swipermini.css'

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import { useAxios } from '@/hooks/useAxios';
import { ProductType } from '@/services/Products';
import ProductCard from '../ProductCard';

export default function SwiperMini() {

    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => useAxios().get("/products", {
          params: {
            page: 1,
            limit: 100
          }
        }).then(res => res.data.products ? res.data.products : [])
      })

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper swipermini"
      >
        {products.map((item: ProductType) => <SwiperSlide key={item.product_id}><ProductCard item={item} /></SwiperSlide>)}
      </Swiper>
    </>
  );
}
