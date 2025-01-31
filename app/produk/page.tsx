import React from 'react';
import Card from '@/components/Card/Card';
import { getProductFromServer } from '@/api/hygraph/produks';
import { Product } from '@/types/Hygraph';

async function ProductPage() {
  const products : Product[] = await getProductFromServer();
  
  return (
    <main className='flex flex-col justify-center items-center'>

        <div className='my-10 gap-4 flex flex-col justify-center items-center'>
          <h1 className='text-3xl sm:text-4xl font-bold'>Produk</h1>
          <h2 className='text-lg px-4 text-center  sm:text-xl'>Karya yang Lahir dari Cinta dan Keindahan Tradisi Kubu</h2>
        </div>

        <div className='list-heritage grid p-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-12 my-4'>
          {products.map((product : Product, index : number) => (
            <Card
              style='mb-4'
              href={`/produk/${index}`}
              key={product.namaProduk}
              imageUrl={product.fotoProduk[0].url}
              title={product.namaProduk}
              description={product.deskripsiProduk}
            />
          ))}
        </div>
    </main>
  )
}

export default ProductPage