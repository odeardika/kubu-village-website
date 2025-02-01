'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Destination } from '@/types/Hygraph';

interface SwiperClientProps {
  destination: Destination;
}

export default function SwiperClient({ destination }: SwiperClientProps) {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="w-full h-full"
    >
      {destination.fotoTempatWisata.map((foto, index) => (
        <SwiperSlide key={index}>
          <Image
            src={foto.url}
            alt={destination.namaTempatWisata}
            width={400}
            height={300}
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}