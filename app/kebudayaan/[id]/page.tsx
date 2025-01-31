import React from "react";
import { getKebudayaanFromServer } from "@/api/hygraph/kebudayaan";
import Image from "next/image";
import { Heritage } from "@/types/Hygraph";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function ProductPage({ params }: PageProps) {
  const products: Heritage[] = await getKebudayaanFromServer();
  const currentHeritag = products[parseInt((await params).id)];
  return (
    <main className=" lg:mx-auto lg:my-10 lg:px-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center my-10 ">
        {currentHeritag.namaBudaya}
      </h1>
      <div className="lg:flex lg:flex-row lg:gap-10">
        <div className="flex justify-center items-center mx-4 rounded-lg drop-shadow-2xl max-w-full lg:w-full overflow-hidden">
          <Image
            src={currentHeritag.fotoKebudayaan[0].url}
            alt={currentHeritag.namaBudaya}
            width={400}
            height={300}
            className="w-full object-cover rounded-lg"
          />
        </div>
      </div>
        <div className="description mx-4 p-4 rounded-lg shadow-lg lg:mt-5">
          <p>{currentHeritag.deskripsiKebudayaan}</p>
        </div>
    </main>
  );
}

export default ProductPage;
