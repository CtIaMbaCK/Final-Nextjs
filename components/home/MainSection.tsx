"use client";
import Image from "next/image";

const MainSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 py-10 gap-10">
      <div className="w-full  rounded-3xl overflow-hidden shadow-lg">
        <div className="w-full  aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/DJhS895ambk?controls=1&modestbranding=1&rel=0&showinfo=0&vq=hd1080"
            title="VAN LANG UNIVERSITY: WHERE IMPACT MATTERS"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-6">
        <div className="bg-gray-50 px-4 py-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
            {/* QS Ranking */}
            <div className="bg-white p-4 rounded-lg shadow-sm text-sm font-semibold">
              <Image
                src="https://ext.same-assets.com/3671364340/4013385321.png"
                alt="QS World University Rankings"
                width={1000}
                height={1000}
                className="h-16 w-auto mb-2"
              />
              <p className="text-gray-600">TOP TRƯỜNG ĐẠI HỌC</p>
              <p className="text-gray-600">500 TỐT NHẤT CHÂU Á</p>
            </div>

            {/* THE Impact Ranking */}
            <div className="bg-white p-4 rounded-lg shadow-sm text-sm font-semibold">
              <Image
                src="https://ext.same-assets.com/3671364340/3420881113.png"
                alt="THE Impact Rankings"
                width={1000}
                height={1000}
                className="h-16 w-auto mb-2"
              />
              <p className="text-gray-600">TOP 801 - 1000</p>
              <p className="text-gray-600">VỀ ẢNH HƯỞNG ĐỐI VỚI SỰ</p>
              <p className="text-gray-600">
                PHÁT TRIỂN BỀN VỮNG TOÀN CẦU
              </p>
            </div>

            {/* Certification */}
            <div className="bg-white p-4 rounded-lg shadow-sm text-sm font-semibold">
              <p className=" text-gray-600 mb-2">
                ĐẠI HỌC ĐẠT CHỨNG NHẬN
              </p>
              <p className="text-gray-600">
                KIỂM ĐỊNH CHẤT LƯỢNG QUỐC TẾ
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Image
                  src="https://ext.same-assets.com/3671364340/2202409147.png"
                  alt="STARS"
                  width={1000}
                  height={1000}
                  className="h-8 w-auto"
                />
                <Image
                  src="https://ext.same-assets.com/3671364340/1151752288.png"
                  alt="Certification"
                  width={1000}
                  height={1000}
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
