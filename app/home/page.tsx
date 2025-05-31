import Chatbot from "@/components/home/ChatBot";
import MainSection from "@/components/home/MainSection";
import Major from "@/components/home/Major";
import News from "@/components/home/News";
// import Image from "next/image";

const page = () => {
  return (
    <div className="pt-16 relative z-0  ">
      {/* <div className=" w-[50px] h-[50px] bg-[#d72134] fixed bottom-6 right-6 flex justify-center items-center rounded-full hover:scale-110 transition-all duration-300 ease-in-out z-50">
        <Image 
          src="/vanlang.png" 
          alt="Van Lang Logo" 
          width={1000} 
          height={1000} 
          className="w-auto h-auto">
        </Image>
      </div> */}
      <Chatbot />
      <MainSection />
      <Major />
      <News />
    </div>
  );
};

export default page;
