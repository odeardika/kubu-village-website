"use client";
import React from 'react'
import { menuData } from '@/types/Navbar';

interface SidebarMenuProps {
    isOpen: boolean;
    menuList : menuData[]
}
function SidebarMenu({isOpen, menuList} : SidebarMenuProps) {
  if (!process.env.NEXT_PUBLIC_PHONE_NUMBER ) {
    throw new Error('NEXT_PUBLIC_PHONE_NUMBER  is not defined');
  }
  const phoneNumber = `${process.env.NEXT_PUBLIC_PHONE_NUMBER }`  || "No phone available";
  return (
    <div
          className={`fixed top-0 right-0 h-full w-1/2 bg-primary-400 z-40 transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          >
            <div className="text-white p-4 pt-12 flex flex-col justify-between h-full">
                <ul className="space-y-2">
                    {menuList.map((menu) => (
                        <li key={menu.id} className="py-2 border-b border-gray-300">
                            <a href={menu.url} className="text-black hover:text-gray-600 text-sm">
                                {menu.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <button className="border-2 px-4 py-2 border-primary-800 text-primary-800 rounded-md font-semibold bottom-0">
                <a 
                href={`https://wa.me/${phoneNumber}?text=Halo%20saya%20ingin%20bertanya`} 
                target="_blank"
                rel="noopener noreferrer"
                >Hubungi Kami</a>
                </button>
            </div>
    </div>
  )
}

export default SidebarMenu