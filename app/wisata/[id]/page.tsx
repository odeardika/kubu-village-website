import React from "react";
import { getDestinationFromServer } from "@/api/hygraph/wisata";
import Image from "next/image";
import { Destination } from "@/types/Hygraph";
import SwiperClient from "@/components/Swiper/SwiperDestination";
import DynamicDescription from "@/components/Description/DynamicDescription";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function HeritagePage({ params }: PageProps) {
  const destination: Destination[] = await getDestinationFromServer();
  const currentDestination = destination[parseInt((await params).id)];

  return (
    <main className="lg:mx-auto lg:my-10 lg:px-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center my-10">
        {currentDestination.namaTempatWisata}
      </h1>
      <div className="lg:flex lg:flex-row lg:gap-10">
        <div className="flex justify-center items-center mx-4 rounded-lg drop-shadow-2xl lg:w-3/4 aspect-[3/2] overflow-hidden">
          {/* Gunakan SwiperClient di sini */}
          <SwiperClient destination={currentDestination} />
        </div>
        <div className="flex justify-center flex-col lg:w-1/3">
          <div className="flex flex-col my-5 mx-4 p-4 rounded-lg shadow-lg relative">
            <h3 className="text-xl font-semibold mb-2">
              {currentDestination.namaTempatWisata}
            </h3>
            <a
              href={currentDestination.urlLokasiWisata}
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
                {currentDestination.lokasiWisata}
              </h4>
            </a>

            <div className="absolute top-0 right-0 z-30 p-1 text-white bg-slate-800 rounded-bl-lg rounded-tr-lg">
              <h3>Open</h3>
            </div>

            <div className="price mt-2">
              <h3 className="text-lg font-bold">Price :</h3>
              <p className="">
                Rp{" "}
                <span className="font-semibold">
                  {currentDestination.hargaTiketWisata}.000
                </span>
                / {currentDestination.satuanHargaTiket}
              </p>
            </div>
            {currentDestination.noTelpon && (
              <a
                href={`https://wa.me/${currentDestination.noTelpon}?text=Halo%20saya%20ingin%20bertanya`}
                className="bg-slate-800 text-white w-min text-nowrap p-2 rounded-md my-2"
              >
                Book Now
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="description mx-4 p-4 rounded-lg shadow-lg lg:mt-5">
        <DynamicDescription text={currentDestination.deskripsiTempatWisata} />
      </div>
    </main>
  );
}

export default HeritagePage;
