import React from "react";

function Navbar({ navClassname = "" }: { navClassname?: string }) {
  return (
    <>
      <nav className={`${navClassname}`}>
        <ul className="flex justify-center">
          <li className="mr-6">
            <a href="#" className="text-blue-500 hover:text-blue-800">
              Home
            </a>
          </li>
          <li className="mr-6">
            <a href="#" className="text-blue-500 hover:text-blue-800">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:text-blue-800">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
