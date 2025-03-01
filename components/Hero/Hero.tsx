import React from "react";

function Hero() {
  return (
    <div className="Hero Section relative h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/background.mov"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Overlay Gelap */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

      {/* Content di atas video */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full md:gap-6 gap-4">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
          Pesona Kubu
        </h1>
        <h2 className="text-white text-base sm:text-2xl md:text-3xl">
        Temukan Keajaiban Tersembunyi Kelurahan Kubu!
        </h2>
      </div>
    </div>
  );
}

export default Hero;
