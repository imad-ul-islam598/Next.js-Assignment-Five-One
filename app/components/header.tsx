// components/Header.tsx
import React from "react";
import Image from "next/image";
import { CiSearch, CiHeart, CiUser, CiShoppingCart } from 'react-icons/ci';

const Header = () => {
  return (
    <header className="bg-[#A29875] py-4 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      {/* Logo */}
      <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
        <Image
          src="/logo.png" 
          alt="Purity Logo"
          width={242} 
          height={87}
        />
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-white rounded-lg text-[#6C757D] w-full md:w-1/2 pl-4 pr-2">
        <input
          type="text"
          placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
          className="flex-grow px-4 py-2 rounded-full outline-none text-sm md:text-base"
        />
        <CiSearch className="text-black w-[21px] h-[21px]" />
      </div>

      {/* Icons */}
      <div className="flex items-center justify-center space-x-4 md:space-x-6 text-white cursor-pointer">
        <CiHeart className="w-[28px] h-[28px] md:w-[33px] md:h-[29px] hover:text-[#ffd63f] ease-in-out duration-300" />
        <CiUser className="w-[25px] h-[25px] md:w-[28px] md:h-[29px] hover:text-[#ffd63f] ease-in-out duration-300" />
        <CiShoppingCart className="w-[30px] h-[30px] md:w-[38px] md:h-[30px] hover:text-[#ffd63f] ease-in-out duration-300" />
      </div>
    </header>
  );
};

export default Header;
