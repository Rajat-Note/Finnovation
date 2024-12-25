"use client";

import Image from "next/image";
import logo from "../../public/logo.png";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsList } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [click, setClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleClick = () => setClicked(!click);

    return ( 
        <div className={`${isScrolled ? `fixed bg-[#282727] w-full top-0 px-[12.5%] py-6 z-50`: 'absolute w-[100%] md:w-[75%] mx-auto top-6'}`}>
          <div className="flex justify-between items-center gap-4 z-50">
              <div>
                  <Image
                      src={logo}
                      alt="logo"
                  />
              </div>
              <ul className="hidden md:flex md:justify-center md:items-center md:gap-14">
                  <li className="text-white font-semibold">Home</li>
                  <li className="text-white font-semibold">About Us</li>
                  <li className="text-white font-semibold">Why Choose Us</li>
                  <li className="text-white font-semibold flex gap-1 justify-center items-center group">
                    <h1>Other Services</h1>
                    <IoIosArrowDown className="group-hover:transition group-hover:rotate-180 group-hover:duration-300" />
                    <div className="hidden group-hover:block absolute top-[75%] w-54 bg-white border border-gray-200 rounded-md shadow-lg">
                      <a
                        href="#"
                        className="block text-gray-700 px-4 py-2 hover:translate-x-1"
                      >
                        Commercial Brokerage
                      </a>
                      <a
                        href="#"
                        className="block text-gray-700 px-4 py-2 hover:translate-x-1"
                      >
                        Discount Card Services
                      </a>
                      <a
                        href="#"
                        className="block text-gray-700 px-4 py-2 hover:translate-x-1"
                      >
                        Loyalty Card Services
                      </a>
                    </div>
                  </li>
                  <button className="px-7 py-3 rounded-md bg-[#8ec21e] text-white font-bold">Contact us</button>
              </ul>
              <div className="block md:hidden text-white">
                {
                  click ? <RxCross1 onClick={handleClick} size={24} /> : <BsList onClick={handleClick} size={24}/>
                }
              </div>
          </div>
          <div 
            className={`${click ? `md:hidden ${isScrolled ? "fixed bg-white w-full top-[11%] z-50": "absolute top-[200%] w-full bg-white border border-gray-200 shadow-lg"} `: "hidden"}`}
          >
            <a
              href="#"
              className="block text-gray-700 px-4 py-2 hover:translate-x-1"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-700 px-4 py-2 hover:translate-x-1"
            >
              About Us
            </a>
            <a
              href="#"
              className="block text-gray-700 px-4 py-2 hover:translate-x-1"
            >
              Why Choose Us
            </a>
            <div
              className="block text-gray-700 px-4 py-2 hover:translate-x-1"
            >
              <div className="text-gray-700 flex gap-1 justify-start items-center group">
                <h1>Other Services</h1>
                <IoIosArrowDown className="group-hover:transition group-hover:rotate-180 group-hover:duration-300" />
                <div className="hidden group-hover:block absolute top-[75%] w-54 bg-white border border-gray-200 rounded-md shadow-lg">
                  <a
                    href="#"
                    className="block text-gray-700 px-4 py-2 hover:translate-x-1"
                  >
                    Commercial Brokerage
                  </a>
                  <a
                    href="#"
                    className="block text-gray-700 px-4 py-2 hover:translate-x-1"
                  >
                    Discount Card Services
                  </a>
                  <a
                    href="#"
                    className="block text-gray-700 px-4 py-2 hover:translate-x-1"
                  >
                    Loyalty Card Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}
 
