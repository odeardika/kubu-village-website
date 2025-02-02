import React from 'react';
import { getKebudayaanFromServer } from '@/api/hygraph/kebudayaan';
import Card from '@/components/Card/Card';  
import { Heritage } from '@/types/Hygraph';
async function Kebudayaan() {
  const heritages : Heritage[] = await getKebudayaanFromServer();

  return (
    <main className='flex flex-col justify-center items-center'>

        <div className='my-10 gap-4 flex flex-col justify-center items-center'>
          <h1 className='text-3xl md:text-4xl font-bold'>Kebudayaan</h1>
          <h2 className='text-lg px-4 text-center sm:text-xl'>Jelajahi Pesona Budaya Abadi Desa Kubu!</h2>
        </div>

        <div className='list-heritage grid p-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-12 my-4'>
          {heritages.map((product : Heritage, index : number) => (
            <Card
              style='mb-4'
              href={`/kebudayaan/${index}`}
              key={product.namaBudaya}
              imageUrl={product.fotoKebudayaan[0].url}
              title={product.namaBudaya}
              description={product.deskripsiKebudayaan}
            />
          ))}
        </div>
    </main>
  )
}

export default Kebudayaan

