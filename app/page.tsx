import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <header>
        <div className="logo">

        </div>
        <nav className="">
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
        <div className="Contact Us">

        </div>
      </header>
    </div>
  );
}
