'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Product } from '@/types/Hygraph';

interface SwiperClientProps {
  product: Product;
}

export default function SwiperClient({ product }: SwiperClientProps) {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="w-full h-full"
    >
      {product.fotoProduk.map((foto, index) => (
        <SwiperSlide key={index}>
          <Image
            src={foto.url}
            alt={product.namaProduk}
            width={400}
            height={300}
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}