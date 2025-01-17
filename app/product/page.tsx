import React from 'react';
import Card from '@/components/Card/Card';
import { getProductFromServer } from '@/api/hygraph';
import { Product } from '@/types/Hygraph';

async function ProductPage() {
  const products = await getProductFromServer();

  return (
    <main className='flex flex-col justify-center items-center'>

        <div className='my-10 gap-4 flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold'>Product</h1>
          <h2 className='text-xl'>Crafted with Heart, Inspired by Kubu's Tradition!</h2>
        </div>

        <div className='list-heritage grid grid-cols-3 gap-12 my-4'>
          {products.map((product : Product) => (
            <Card
              key={product.productName}
              imageUrl={product.productImage.url}
              title={product.productName}
              description={product.productDescription}
            />
          ))}
        </div>
    </main>
  )
}

export default ProductPage