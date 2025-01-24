import React from 'react';
import Card from '@/components/Card/Card';
import { getProductFromServer } from '@/api/hygraph';
import { Product } from '@/types/Hygraph';

async function ProductPage() {
  const products = await getProductFromServer();
  products.map((product : Product, index : number) => {
    if (!index) {
      console.error('Product ID is missing:', product);
    }  
  });
  return (
    <main className='flex flex-col justify-center items-center'>

        <div className='my-10 gap-4 flex flex-col justify-center items-center'>
          <h1 className='text-3xl sm:text-4xl font-bold'>Product</h1>
          <h2 className='text-lg px-4 text-center  sm:text-xl'>Crafted with Heart, Inspired by Kubu&apos;s Tradition!</h2>
        </div>

        <div className='list-heritage grid p-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-12 my-4'>
          {products.map((product : Product, index : number) => (
            <Card
              style='mb-4'
              href={`/product/${index}`}
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