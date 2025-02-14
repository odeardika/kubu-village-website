import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Pesona Kubu",
  description: "Selamat datang di Pesona Kubu, tempat di mana keindahan dan pesona berpadu dalam harmoni. Jelajahi setiap sudut yang menyimpan cerita, nikmati keajaiban yang hadir di setiap langkah, dan rasakan ketenangan yang menyatu dengan alam. Melangkahlah ke dunia penuh keajaiban, di mana setiap pemandangan adalah lukisan hidup yang memanjakan mata. Biarkan diri Anda tenggelam dalam pesona yang menakjubkan, merasakan kesejukan udara, serta menyaksikan warna-warni yang menari dalam cita Di sini, setiap momen menjadi kenangan berharga. Ciptakan kisah yang tak terlupakan, abadikan setiap detik yang berharga, dan temukan kedamaian di tempat yang begitu memikat. Mari bersama-sama mendengarkan pengalaman yang penuh makna dan keindahan",
  icons: {
    icon: '/favicon.ico', // Path ke file favicon
  },
  openGraph: {
    title: 'Pesona Kubu',
    description: 'Di Pesona Kubu, kami menghadirkan berbagai produk lokal yang mencerminkan keindahan, keaslian, dan kearifan budaya setempat.',
    images: [
      {
        url: 'https://pesona-kubu.vercel.app/image/og-image.png',
        width: 800,
        height: 600,
        alt: 'Pesona Kubu',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

