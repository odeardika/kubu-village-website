import React from "react";
import { getProductFromServer } from "@/api/hygraph/produks";
import Image from "next/image";
import { Product } from "@/types/Hygraph";
import SwiperClient from "@/components/Swiper/SwiperProduct";
import DynamicDescription from "@/components/Description/DynamicDescription";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function ProductPage({ params }: PageProps) {
  const products: Product[] = await getProductFromServer();
  const currentProduct = products[parseInt((await params).id)];
  return (
    <main className=" lg:mx-auto lg:my-10 lg:px-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center my-10 ">
        {currentProduct.namaProduk}
      </h1>
      <div className="lg:flex lg:flex-row lg:gap-10">
        <div className="flex justify-center items-center mx-4 rounded-lg drop-shadow-2xl lg:w-3/4 aspect-[3/2] overflow-hidden">
          <SwiperClient product={currentProduct} />
        </div>
        <div className="flex justify-center flex-col lg:w-1/3">
          <div className="flex flex-col my-5 mx-4 p-4 rounded-lg shadow-lg relative">
            <h3 className="text-xl font-semibold mb-2">
              {currentProduct.namaProduk}
            </h3>
            <a
              href={currentProduct.urlLokasiProduk}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <Image
                src="/icons/location-svgrepo-com.svg"
                alt=""
                width={20}
                height={20}
              />
              <h4 className="text-sm font-light">
                {currentProduct.lokasiProduk}
              </h4>
            </a>

            <div className=" absolute top-0 right-0 z-30 p-1 text-white bg-slate-800 rounded-bl-lg rounded-tr-lg">
              <h3>On Sale</h3>
            </div>

            <div className="price mt-2">
              <h3 className="text-lg font-bold">Harga :</h3>
              <p className="">
                Rp{" "}
                <span className="font-semibold">
                  {currentProduct.hargaProduk}.000
                </span>
                / {currentProduct.satuanHargaProduk}
              </p>
            </div>
            <a
              href=""
              className="bg-slate-800 text-white w-min text-nowrap p-2 rounded-md my-2"
            >
              Buy Now
            </a>
          </div>
        </div>

      </div>
        <div className="description mx-4 p-4 rounded-lg shadow-lg lg:mt-5">
          <DynamicDescription text={currentProduct.deskripsiProduk} />
        </div>
    </main>
  );
}

export default ProductPage;
