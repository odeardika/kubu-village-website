import React from "react";
import { menuData } from "@/types/Navbar";

interface NavbarProps {
  navClassname?: string;
  menuList : menuData[]
}

function Navbar({ navClassname = "", menuList }: NavbarProps) {
  
  return (
    <>
      <nav className={`${navClassname}`}>
        <ul className="flex justify-center">
          {menuList.map((menu) => (
            <li className="mr-6" key={menu.name}>
              <a href={menu.url} className="text-slate-800 hover:text-slate-600 hover:border-b-2 pb-1 border-slate-500 text-base">
                {menu.name}
              </a>
            </li>
          ))}
          
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
