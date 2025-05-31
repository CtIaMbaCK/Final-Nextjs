"use client";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

const News = () => {
  return (
    <section className="bg-gray-50 mb-10 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-4 mt-6 justify-between">
          <h2 className="text-md font-bold text-gray-900">Tin tức nổi bật</h2>
          <div className="flex items-center group transition-all duration-300">
              <div className="flex items-center gap-2 bg-[#1f224d] px-4 rounded-2xl btn">
                <a // thay bằng link hoặc router
                  href="https://tuyensinh.vlu.edu.vn/tin-tuc"
                  className="text-md font-semibold text-white"
                >
                  Xem toàn bộ tin tức
                </a>
              </div>
              <FaLongArrowAltRight className="w-6 h-6 text-[#d91f36] hidden group-hover:block   transition-all duration-300"/>
          </div>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Tin 1 */}
          <article className="bg-white rounded-lg shadow-sm overflow-hidden 
          hover:shadow-md hover:scale-105 transition-all ">
            <Image
              src="https://ext.same-assets.com/3671364340/849522504.jpeg"
              alt="News"
              width={400}
              height={240}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Trường Đại học Văn Lang nhận hồ sơ thi đánh giá năng lực V-SAT
                năm 2025
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <p className="text-sm text-gray-600">
                  Phòng Tuyển sinh và Truyền thông
                </p>
                <p className="text-sm text-gray-600">2025-04-21</p>
              </div>
            </div>
          </article>

          {/* Tin 2 */}
          <article className="bg-white rounded-lg shadow-sm overflow-hidden
           hover:shadow-md hover:scale-105 transition-all">
            <Image
              src="https://ext.same-assets.com/3671364340/849522504.jpeg"
              alt="News"
              width={400}
              height={240}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Thông báo: Trường Đại học Văn Lang nhận hồ sơ xét duyệt học bổng
                tài năng năm 2025
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <p className="text-sm text-gray-600">
                  Phòng Tuyển sinh và Truyền thông
                </p>
                <p className="text-sm text-gray-600">2025-04-21</p>
              </div>
            </div>
          </article>

          {/* Tin 3 */}
          <article className="bg-white rounded-lg shadow-sm overflow-hidden
           hover:shadow-md hover:scale-105 transition-all">
            <Image
              src="https://ext.same-assets.com/3671364340/849522504.jpeg"
              alt="News"
              width={400}
              height={240}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Chính thức: Thông tin tuyển sinh 2025 của Trường Đại học Văn
                Lang
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <p className="text-sm text-gray-600">
                  Phòng Tuyển sinh và Truyền thông
                </p>
                <p className="text-sm text-gray-600">2025-04-21</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default News;
