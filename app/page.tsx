import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Beranda() {
  return (
    <div className="">

      {/* Hero Section */}
      <Hero />
      
      {/* Description Section */}
      <div className="descripton flex flex-col-reverse p-4 mt-16 gap-4 items-center lg:flex-row lg:justify-between lg:mx-32">
        <div className="description flex flex-col gap-2 lg:gap-6 lg:w-1/2">
          <h2 className="text-2xl lg:text-4xl text-center font-semibold text-slate-800 md:text-3xl">Jelajahi Kelurahan Kubu</h2>
          <p className="text-slate-800 text-justify p-2 font-light lg:leading-relaxed md:text-lg">
          Selamat datang di Pesona Kubu, tempat di mana keindahan dan pesona berpadu dalam harmoni. Jelajahi setiap sudut yang menyimpan cerita, nikmati keajaiban yang hadir di setiap langkah, dan rasakan ketenangan yang menyatu dengan alam. Melangkahlah ke dunia penuh keajaiban, di mana setiap pemandangan adalah lukisan hidup yang memanjakan mata. Biarkan diri Anda tenggelam dalam pesona yang menakjubkan, merasakan kesejukan udara, serta menyaksikan warna-warni yang menari dalam cita Di sini, setiap momen menjadi kenangan berharga. Ciptakan kisah yang tak terlupakan, abadikan setiap detik yang berharga, dan temukan kedamaian di tempat yang begitu memikat. Mari bersama-sama mendengarkan pengalaman yang penuh makna dan keindahan  
          </p>
        </div>
        <div className="">
          <Image src="/image/description.png" alt="description image" width={500} height={500} />
        </div>
      </div>

      {/* Product Section */}
      <div className="descripton flex flex-col p-4 mt-16 gap-4 items-center lg:flex-row lg:justify-between lg:mx-32">
        <div className="">
          <Image src="/image/product.png" alt="description image" width={500} height={500} />
        </div>
        <div className="description flex flex-col gap-2 lg:gap-6 lg:w-1/2">
          <h2 className="text-2xl lg:text-4xl text-center font-semibold text-slate-800 md:text-3xl">Produk Kelurahan Kubu</h2>
          <p className="text-slate-800 text-justify p-2 font-light lg:leading-relaxed md:text-lg">
            Di Pesona Kubu, kami menghadirkan berbagai produk lokal yang mencerminkan keindahan, keaslian, dan kearifan budaya setempat. Setiap produk yang kami tawarkan bukan sekadar barang, tetapi memiliki kisah dan makna yang mendalam. Dibuat dengan tangan penuh cinta dan keterampilan yang diwariskan turun-temurun, produk kami membawa sentuhan tradisi yang tetap relevan di zaman modern.
          </p>
          <p className="text-slate-800 text-justify p-2 font-light lg:leading-relaxed md:text-lg">
            Jelajahi koleksi produk kami dan temukan sesuatu yang istimewa untuk diri sendiri atau orang tercinta. Setiap pilihan yang Anda buat bukan hanya menghadirkan manfaat bagi Anda, tetapi juga berkontribusi langsung dalam mendukung para pengrajin dan petani lokal. Kami percaya bahwa keindahan sejati terletak pada hal-hal yang autentik dan dibuat dengan sepenuh hati. Mari bersama-sama menciptakan momen berharga dengan produk yang bermakna dan bernilai.
          </p>
        </div>
      </div>


      {/* Heritage & Destination Section */}
      <div className="descripton flex flex-col-reverse p-4 mt-16 gap-4 items-center lg:flex-row lg:justify-between lg:mx-32">
      <div className="description flex flex-col gap-2 lg:gap-6 lg:w-1/2">
          <h2 className="text-2xl lg:text-4xl text-center font-semibold text-slate-800 md:text-3xl">Kebudayaan & Pariwisata </h2>
          <p className="text-slate-800 text-justify p-2 font-light lg:leading-relaxed md:text-lg">
          Di Pesona Kubu, kami menghadirkan berbagai produk lokal yang mencerminkan keindahan, keaslian, dan kearifan budaya setempat. Setiap produk yang kami tawarkan bukan sekadar barang, tetapi memiliki kisah dan makna yang mendalam. Dibuat dengan tangan penuh cinta dan keterampilan yang diwariskan turun-temurun, produk kami membawa sentuhan tradisi yang tetap relevan di zaman modern.
          </p>
          <p className="text-slate-800 text-justify p-2 font-light lg:leading-relaxed md:text-lg">
          Pesona Kubu juga menawarkan pesona alam yang menakjubkan. Nikmati keindahan alam yang masih asri menjelajahi tempat-tempat tersembunyi yang menghadirkan ketenangan, jauh dari hiruk-pikuk perkotaan.Setiap kunjungan ke Pesona Kubu bukan hanya perjalanan wisata, tetapi juga pengalaman mendalam yang memperkaya jiwa. Biarkan setiap langkah Anda menjadi bagian dari kisah yang tak terlupakan.
          </p>
        </div>
        <div className="">
          <Image src="/image/destination.png" alt="description image" width={500} height={500} />
        </div>
        
      </div>
      
      {/* Social Media */}
      {/* News */}
      

    </div>
  );
}
