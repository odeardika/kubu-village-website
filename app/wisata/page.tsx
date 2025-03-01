import React from 'react';
import { getDestinationFromServer } from '@/api/hygraph/wisata';
import Card from '@/components/Card/Card';
import { Destination } from '@/types/Hygraph';

async function DestinationPage() {
  const destinations : Destination[] = await getDestinationFromServer();
  

  return (
    <main className='flex flex-col justify-center items-center'>

        <div className='my-10 gap-4 flex flex-col justify-center items-center'>
          <h1 className='text-3xl md:text-4xl font-bold'>Wisata</h1>
          <h2 className='text-base md:text-xl text-center'>Temukan Keindahan Kelurahan Kubu yang Menakjubkan!</h2>
        </div>

        <div className='list-heritage grid p-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-12 my-4'>
          {destinations.map((destination : Destination, index : number) => (
            <Card
              style='mb-4'
              href={`/wisata/${index}`}
              key={destination.namaTempatWisata}
              imageUrl={destination.fotoTempatWisata[0].url}
              title={destination.namaTempatWisata}
              description={destination.deskripsiTempatWisata}
            />
          ))}
        </div>
    </main>
  )
}

export default DestinationPage