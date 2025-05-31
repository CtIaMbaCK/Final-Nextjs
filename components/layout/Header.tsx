"use client";

import Link from "next/link";
import React from "react";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#151735] z-50 shadow-lg rounded-bl-lg rounded-br-lg ">
      <div className="w-full mx-auto flex flex-wrap  justify-between items-center py-3">
        {/* Logo */}
        <div className="flex-shrink-0 mb-2 ml-6 sm:mb-0">
          <Link href={"/home"}>
            <img src="/logoVl.png" alt="logoVanLang" className="w-36 h-auto" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="w-full sm:w-auto hidden lg:flex md:flex mr-6 ">
          <ul className="flex-wrap justify-center sm:justify-end gap-2 sm:gap-4 flex ">
            <li>
              <div className="bg-[#d72134] text-white rounded-full px-4 py-2 min-w-[100px] text-center font-medium hover:bg-red-700 hover:scale-105 transition">
                <Link href="/home">Trang Chủ</Link>
              </div>
            </li>
            <li>
              <div className="bg-[#d72134] text-white rounded-full px-4 py-2 min-w-[100px] text-center font-medium hover:bg-red-700 hover:scale-105 transition">
                <Link href="/">Liên Hệ</Link>
              </div>
            </li>
            <li>
              <div className="bg-[#d72134] text-white rounded-full px-4 py-2 min-w-[100px] text-center font-medium hover:bg-red-700 hover:scale-105 transition">
                <Link href="/">Tuyển Sinh</Link>
              </div>
            </li>
            <li>
              <Link href="/">
                <div className="bg-blue-700 text-white rounded-full px-4 py-2 min-w-[100px] text-center font-semibold hover:bg-blue-800 hover:scale-105 transition">
                  Đăng nhập
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        <button className="flex flex-col space-y-1 lg:hidden md:hidden text-white text-3xl mr-6">
          <IoMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;
