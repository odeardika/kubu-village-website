'use client'
import React from 'react'
import HamburgerButton from "@/components/Button/HamburgerButton";
import SidebarMenu from "@/components/Menu/SidebarMenu";
import ContactUsButton from "@/components/Button/ContactUsButton";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Navbar from "@/components/Navbar/Navbar";
import { menuData } from "@/types/Navbar";
import { useState } from "react";

function Header() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    if (!process.env.NEXT_PUBLIC_PHONE_NUMBER ) {
      throw new Error('NEXT_PUBLIC_PHONE_NUMBER  is not defined');
    }
    const phoneNumber = `${process.env.NEXT_PUBLIC_PHONE_NUMBER }`  || "No phone available";

    const handleHamburgerButtonClick = () => {
        setIsSideBarOpen((prevState) => !prevState);
      }
      const menuList : menuData[] = [
        {id : 1, name : "Beranda", url : "/", isSelected : false},
        {id : 2, name : "Kebudayaan", url : "/kebudayaan", isSelected : false},
        {id : 3, name : "Wisata", url : "/wisata", isSelected : false},
        {id : 4, name : "Produk", url : "/produk", isSelected : false},
      ];
  return (
    <header className="flex justify-between items-center p-4 sticky top-0 bg-white z-50 shadow-md">
        <div className="logo">
          <Image src={logo} alt="logo" width={50} height={50} />
        </div>
        <div>
          <Navbar navClassname="hidden md:block" menuList={menuList}/>
        </div>
        
        <div className="burger relative flex">
          <div className="relative z-50">
            <HamburgerButton onClick={handleHamburgerButtonClick} />
          </div>
          
          {/* Menu Bar */}
          <SidebarMenu isOpen={isSideBarOpen} menuList={menuList}/>

          <ContactUsButton href={`https://wa.me/${phoneNumber}?text=Halo%20saya%20ingin%20bertanya`}/>
          
        </div>

      </header>
  )
}

export default Header