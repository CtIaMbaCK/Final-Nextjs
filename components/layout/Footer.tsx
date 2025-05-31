"use client";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#151735] text-white px-4 py-12 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-semibold mb-4">THÔNG TIN LIÊN HỆ</h2>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {/*  Info */}
          <div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold mb-4">Phòng Tuyển sinh và Truyền thông</p>
                <div className="flex items-center gap-2 mt-2">
                  <FaPhone />
                  <span className="text-xs">028.7105.9999</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <MdEmail />
                  <span className="text-xs">tuyensinh@vlu.edu.vn</span>
                </div>
              </div>
            </div>
          </div>

          {/* location */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Các cơ sở trường</h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <FaLocationDot />
                <span>
                  Cơ sở chính: 69/68 Đặng Thùy Trâm, Phường 13, Quận Bình Thạnh
                </span>
              </div>
              <div className="flex items-start gap-2">
                <FaLocationDot />
                <span>
                  Cơ sở 1: 45 Nguyễn Khắc Nhu, Phường Cô Giang, Quận 1
                </span>
              </div>
              <div className="flex items-start gap-2">
                <FaLocationDot />
                <span>
                  Cơ sở 2: 233A Phan Văn Trị, Phường 11, Quận Bình Thạnh
                </span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>

            <h3 className="text-sm font-semibold mb-4">THEO DÕI</h3>
            <div className="space-y-2">

              <a href="https://www.facebook.com/truongdaihocvanlang" className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <FaFacebook />
                  <span className="text-xs">Van Lang University</span>
                </div>
              </a>

              <a href="https://www.youtube.com/@vanlanguniversity" className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                <FaYoutube />
                  <span className="text-xs">Van Lang University</span>
                </div>
              </a>
            </div>

          </div>

          {/* University Info */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">VĂN LANG UNIVERSITY</h3>
            <p className="text-sm text-gray-300">
              Trường Đại học Văn Lang - Chuẩn quốc tế, Top 500 trường đại học
              tốt nhất châu Á
            </p>
          </div> */}
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 - Copyright By Dat_Lap_Chien.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
