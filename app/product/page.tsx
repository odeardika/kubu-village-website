import React from 'react';
import Card from '@/components/Card/Card';
import { getProductFromServer } from '@/api/hygraph';
import { Product } from '@/types/Hygraph';
import loadID from '@/module/loader/loader';

async function ProductPage() {
  const products = await getProductFromServer();
  const productsWithID : any = loadID({array: products});
  
  return (
    <main className='flex flex-col justify-center items-center'>

        <div className='my-10 gap-4 flex flex-col justify-center items-center'>
          <h1 className='text-3xl sm:text-4xl font-bold'>Product</h1>
          <h2 className='text-lg px-4 text-center  sm:text-xl'>Crafted with Heart, Inspired by Kubu&apos;s Tradition!</h2>
        </div>

        <div className='list-heritage grid p-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-12 my-4'>
          {productsWithID.map((product : any) => (
            <Card
              style='mb-4'
              href={`/product/${product.id}`}
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