import React from 'react'
import { getProductFromServer } from '@/api/hygraph';
import Image from 'next/image';


interface PageProps {
    params: {
      id: string;
    };
  }
  

async function ProductPage({ params }: PageProps) {
    const products = await getProductFromServer();
    const currentProduct = products[parseInt(params.id)];
    return (
    <main>
        <h1 className='text-3xl sm:text-4xl font-bold text-center my-10'>
            {currentProduct.productName}
        </h1>
        <div>
            <Image 
                src={currentProduct.productImage.url} 
                alt={currentProduct.productName} 
                width={400} 
                height={250} 
                className="w-full px-10 shadow-lg object-cover" 
            />

        </div>
    </main>
  )
}

export default ProductPage