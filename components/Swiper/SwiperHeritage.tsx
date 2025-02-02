'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Heritage } from '@/types/Hygraph';

interface SwiperClientProps {
  heritage: Heritage;
}

export default function SwiperClient({ heritage }: SwiperClientProps) {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="w-full h-full"
    >
      {heritage.fotoKebudayaan.map((foto, index) => (
        <SwiperSlide key={index}>
          <Image
            src={foto.url}
            alt={heritage.namaBudaya}
            width={400}
            height={300}
            className="w-full object-cover rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}