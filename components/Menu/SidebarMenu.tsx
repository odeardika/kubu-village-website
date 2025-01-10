"use client";
import React from 'react'
import { menuData } from '@/types/Navbar';

interface SidebarMenuProps {
    isOpen: boolean;
    menuList : menuData[]
}
function SidebarMenu({isOpen, menuList} : SidebarMenuProps) {
  return (
    <div
          className={`fixed top-0 right-0 h-full w-1/2 bg-primary-400 z-40 transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          >
            <div className="text-white p-4 pt-12">
                <ul className="space-y-2">
                    {menuList.map((menu) => (
                        <li key={menu.id} className="py-2 border-b border-gray-300">
                            <a href={menu.url} className="text-black hover:text-gray-600 text-sm">
                                {menu.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
    </div>
  )
}

export default SidebarMenu