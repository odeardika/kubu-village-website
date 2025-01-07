"use client";
import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import logo from "@/public/logo.svg";
import HamburgerButton from "@/components/Button/HamburgerButton";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div className="">
      <header className="flex justify-between items-center p-4">
        <div className="logo">
          <Image src={logo} alt="logo" width={50} height={50} />
        </div>
        <Navbar navClassname="hidden md:block"/>
        
        <div className="burger">
          <HamburgerButton/>
        </div>
      </header>
    </div>
  );
}
