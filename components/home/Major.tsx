"use client";

import Image from "next/image";

const major = [
  {
    title: "THIẾT KẾ",
    icon: "https://ext.same-assets.com/3671364340/1546733673.png",
  },
  {
    title: "LUẬT - KINH DOANH & QUẢN LÝ",
    icon: "https://ext.same-assets.com/3671364340/240114473.png",
  },
  {
    title: "TRUYỀN THÔNG",
    icon: "https://ext.same-assets.com/3671364340/4240619985.png",
  },
  {
    title: "XÃ HỘI NHÂN VĂN - NGÔN NGỮ",
    icon: "https://ext.same-assets.com/3671364340/273649144.png",
  },
  {
    title: "CÔNG NGHỆ - KỸ THUẬT",
    icon: "https://ext.same-assets.com/3671364340/2940056520.png",
  },
  {
    title: "KIẾN TRÚC",
    icon: "https://ext.same-assets.com/3671364340/3458008392.png",
  },
  {
    title: "KHOA HỌC SỨC KHỎE",
    icon: "https://ext.same-assets.com/3671364340/709881049.png",
  },
  {
    title: "NGHỆ THUẬT",
    icon: "https://ext.same-assets.com/3671364340/352056085.png",
  },
  {
    title: "DU LỊCH",
    icon: "https://ext.same-assets.com/3671364340/2165468724.png",
  },
]
const Major = () => {
  return (
    <section className="px-4 py-12 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#d72134] flex justify-center items-center rounded-2xl shadow-xl h-20 mb-8">
          <h2 className="lg:text-2xl font-bold text-white text-ms">
            CHƯƠNG TRÌNH ĐÀO TẠO
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {major.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full  flex items-center justify-center">
                <Image
                  src={program.icon}
                  alt={program.title}
                  width={1000}
                  height={1000}
                  className="h-10 w-10"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 leading-snug">
                {program.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Major;
