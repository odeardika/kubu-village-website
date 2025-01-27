import React from 'react'
import { getProductFromServer } from '@/api/hygraph';
import Image from 'next/image';
import { Product } from '@/types/Hygraph';

interface PageProps {
    params: Promise<{ id: string }>
  }
  

async function ProductPage({ params }: PageProps) {
    const products : Product[] = await getProductFromServer();
    const currentProduct = products[parseInt((await params).id)];
    return (
    <main>
        <h1 className='text-3xl sm:text-4xl font-bold text-center my-10 '>
            {currentProduct.productName}
        </h1>
        <div className='flex justify-center items-center mx-4 rounded-lg drop-shadow-2xl'>
            <Image 
                src={currentProduct.productImage.url} 
                alt={currentProduct.productName} 
                width={400} 
                height={250} 
                className="w-full object-cover rounded-lg" 
            />
        </div>
        <div className='flex justify-center flex-col'>
          <div className='flex flex-col my-5 mx-4 p-4 rounded-lg shadow-lg relative'>
            <h3 className='text-xl font-semibold mb-2'>{currentProduct.productName}</h3>
            <a href={currentProduct.productLocationUrl} target='_blank' rel='noreferrer' className='flex items-center gap-2'>
              <Image src="/icons/location-svgrepo-com.svg" alt="" width={20} height={20}/>
              <h4 className='text-sm font-light'>{currentProduct.productLocation}</h4>
            </a>

            <div className=' absolute top-0 right-0 z-50 p-1 text-white bg-slate-800 rounded-bl-lg rounded-tr-lg'>
              <h3>On Sale</h3>
            </div>

            <div className='price mt-2'>
              <h3 className='text-lg font-bold'>Price :</h3>
              <p className=''>Rp <span className='font-semibold'>{currentProduct.productPrice}.000</span>/ Kg</p>
            </div>
            <a href="" className='bg-slate-800 text-white w-min text-nowrap p-2 rounded-md my-2'>
              Buy Now
            </a>
          </div>
          <div className='description mx-4 p-4 rounded-lg shadow-lg'>
              <p>{currentProduct.productDescription}</p>
          </div>
        </div>
    </main>
  )
}

export default ProductPage