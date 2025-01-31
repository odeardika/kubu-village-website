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
          <h2 className="text-2xl lg:text-4xl font-semibold text-slate-800 md:text-3xl">Discover Kubu Village</h2>
          <p className="text-slate-800 font-light lg:leading-relaxed md:text-lg">Kubu Village, located in Bangli Regency, Bali, is a serene area rich in cultural heritage and natural beauty. Surrounded by lush landscapes and traditional Balinese architecture, Kubu offers a peaceful retreat where visitors can experience authentic local traditions and a strong sense of community. The village is known for its warm hospitality, vibrant ceremonies, and a harmonious blend of nature and culture, making it a perfect destination for those seeking tranquility and cultural exploration.</p>
        </div>
        <div className="">
          <Image src="/image/description.png" alt="description image" width={500} height={500} />
        </div>
      </div>

      {/* Social Media */}
      {/* News */}
      

    </div>
  );
}
