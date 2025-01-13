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

    const handleHamburgerButtonClick = () => {
        setIsSideBarOpen((prevState) => !prevState);
      }
      const menuList : menuData[] = [
        {id : 1, name : "Home", url : "/", isSelected : false},
        {id : 2, name : "Heritage", url : "/heritage", isSelected : false},
        {id : 3, name : "Destination", url : "/destination", isSelected : false},
        {id : 4, name : "Product", url : "/product", isSelected : false},
        {id : 5, name : "Tour", url : "/tour", isSelected : false},
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
          
          <ContactUsButton href={"https://wa.me/6281246899139?text=Halo%20saya%20ingin%20bertanya"}/>
          
        </div>

      </header>
  )
}

export default Header