import React from 'react'
import Card from '@/components/Card/Card'

function TourPage() {
  return (
    <main className='flex flex-col justify-center items-center'>

        <div className='my-10 gap-4 flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold'>Tour</h1>
          <h2 className='text-xl'>Journey Through the Wonders of Kubu!</h2>
        </div>

        {/* <div className='list-heritage grid grid-cols-3 gap-12'>
          <Card imageUrl="/image/description.png" title="Heritage" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas."/>
          <Card imageUrl="/image/description.png" title="Heritage" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas."/>
          <Card imageUrl="/image/description.png" title="Heritage" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas."/>

        </div> */}
    </main>
  )
}

export default TourPage