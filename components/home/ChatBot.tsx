"use client";
import { useState } from "react";
import { FaTimes, FaMicrophone } from "react-icons/fa";
import Image from "next/image";
import { IoCloseCircleSharp } from "react-icons/io5";
import { AiFillPicture } from "react-icons/ai";
import { IoSend } from "react-icons/io5";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Nút nổi bật góc phải */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#B52934] hover:scale-120 transition-all duration-300 ease-in-out  text-white p-2 rounded-full shadow-lg"
        >
          {isOpen ? (
            <FaTimes size={20} />
          ) : (
            <Image
              src="/chatbot.png"
              width={1000}
              height={1000}
              alt="logoChat"
              className="w-10"
            />
          )}
        </button>
      </div>

      {/* khung cua chat */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-6/7 max-w-full h-3/4 bg-white border border-gray-300 rounded-xl shadow-2xl z-50 animate-slide-up">
          {/* Header */}
          <div className="p-2 shadow-lg text-center font-semibold text-ms flex justify-between items-center h-12">
            <div className="flex ml-2">
              <p>VANLANG</p>
              <div className="bg-[#4388FF] text-white w-16 rounded-lg ml-2">
                Beta
              </div>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#B52934] text-2xl hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <IoCloseCircleSharp />
            </button>
          </div>

          {/* nd */}
          <div className="p-4 space-y-3 overflow-y-auto text-sm text-gray-800 h-[calc(100%-96px)]">
            <div className="flex items-center gap-2 mb-4 justify-center flex-col">
              <Image
                src="/chatbot.png"
                width={1000}
                height={1000}
                alt="logo"
                className="w-10"
              />
              <span>Xin chào, tôi là trợ lý tuyển sinh Đại Học Văn Lang</span>
            </div>
          </div>

          <div className="absolute bottom-0 w-full rounded-b-xl bg-[#cfcfcf] px-4 py-2">
            <div className="flex items-center gap-2">
              <button className="text-white hover:text-[#1E224F] transition text-3xl">
                <AiFillPicture />
              </button>

              <button className="text-white hover:text-[#1E224F] transition text-xl">
                <FaMicrophone />
              </button>

              <textarea
                rows={2}
                placeholder="Hỏi VLUCHATBOT"
                className="flex-1 resize-none rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <button className="bg-[#4388FF] text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-600 transition">
                <IoSend />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
