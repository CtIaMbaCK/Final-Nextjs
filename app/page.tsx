"use client";
import React, { FormEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

export default function Home() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  type User = {
    email: string;
    password: string;
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/testUser.json");
      const users: User[] = await res.json();

      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        localStorage.setItem("token", "example_token");
        router.push("/home");
        toast.success("Đăng nhập thành công!");
      } else {
        toast.error("Sai thông tin đăng nhập! Xin vui lòng thử lại.");
      }
    } catch (err) {
      setError("Có lỗi xảy ra");
      alert(err);
    }
  };

  return (
    <div className="flex h-screen w-full justify-center items-center mt-10">
      <form onSubmit={handleLogin} className="flex min-h-screen bg-white">
        <div className="relative flex items-center justify-center">
          <div className="relative z-10 bg-white/90 p-8 rounded-xl shadow-lg w-96">
            <Image
              src="/vanlangLogo2.png"
              alt="Logo"
              width={1000}
              height={1000}
              className="w-40 mx-auto mb-4"
            />
            <h2 className="text-center text-xl font-semibold mb-4">
              WELCOME BACK
            </h2>

            {error && (
              <p className="text-center text-red-600 font-semibold mb-2">
                {error}
              </p>
            )}

            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-gray-50 hover:bg-white shadow-inner mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-gray-50 hover:bg-white shadow-inner mb-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className=" absolute right-3 top-3 text-gray-500 hover:text-gray-700 flex justify-center item text-2xl"
              >
                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </button>
            </div>
            <div className="flex justify-between items-center mb-4 text-sm">
              <label>
                <input type="checkbox" className="mr-1" />
                Remember me
              </label>
              <a href="#" className="text-blue-500">
                Forgot password
              </a>
            </div>
            <button
              type="submit"
              className="bg-[#d72134] w-full text-white p-2 rounded mb-3 hover:scale-102 transition-all duration-300"
            >
              Sign In
            </button>
            <button
              type="button"
              className="w-full text-white  p-2 rounded flex items-center justify-center gap-2 mb-3 bg-blue-400 font-semibold
              hover:scale-102 transition-all duration-300"
            >
              <FaGoogle />
              Sign in with Google
            </button>
            <p className="text-center text-sm">
              Do not have an account?
              <button
                type="button"
                onClick={() => alert("Chuyển sang Sign Up")}
                className="text-red-500 ml-2 "
              >
                Sign Up!
              </button>
            </p>
            <button
              type="button"
              className="w-full bg-[#B52934] text-white p-2 rounded mt-4 flex justify-center items-center gap-2 hover:scale-102 transition-all duration-300"
            >
              <Image
                src={"/vanlang.png"}
                alt="logoVanLang"
                width={1000}
                height={1000}
                className="w-8"
              ></Image>
              <p>Đăng nhập với email Văn Lang</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
