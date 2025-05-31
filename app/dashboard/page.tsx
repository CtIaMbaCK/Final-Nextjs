// pages/LoginPage.js
'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';

const LoginPage = () => {
  const [isSignInMode, setIsSignInMode] = useState(true);

  const toggleMode = () => {
    setIsSignInMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Initial animation for social icons
    if (isSignInMode) {
      const socialIcons = document.querySelectorAll('#socialList > div > div');
      socialIcons.forEach((icon, index) => {
        setTimeout(() => {
          icon.style.transform = 'scale(1)';
        }, (index + 1) * 200); // Staggered animation
      });
    }
  }, [isSignInMode]);

  return (
    <>
      <Head>
        <title>Login/Signup - React/Next.js Version</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap" rel="stylesheet" />
        <style>{`
          @keyframes scaleIn {
            from { transform: scale(0); }
            to { transform: scale(1); }
          }
          @keyframes slideLeft {
            from { transform: translateX(-250%); }
            to { transform: translateX(0); }
          }
          @keyframes slideRight {
            from { transform: translateX(250%); }
            to { transform: translateX(0); }
          }
          @keyframes slideIn {
            from { transform: translateX(35%); }
            to { transform: translateX(0); }
          }

          /* Mobile Responsive Styles (moved here for Next.js consistency) */
          @media only screen and (max-width: 768px) {
            #background {
              height: 100vh !important;
              border-radius: 0 !important;
              z-index: 0 !important;
              transform: none !important;
              right: 0 !important;
              width: 100% !important;
            }
            .w-1\/2.mobile-responsive { /* Add a new class to differentiate */
              width: 100% !important;
              position: absolute !important;
              padding: 2rem !important;
              background-color: white !important;
              border-top-left-radius: 2rem !important;
              border-top-right-radius: 2rem !important;
              transform: translateY(100%) !important;
              transition: 1s ease-in-out !important;
            }
            .flex.flex-wrap.h-screen.mobile-responsive-container { /* Add a new class */
              align-items: flex-end !important;
              justify-content: flex-end !important;
            }
            #signInForm, #signUpForm, #socialList {
              box-shadow: none !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            #signInText, #signUpText {
              margin: 0 !important;
            }
            #signInText p, #signUpText p {
              display: none !important;
            }
            #signInText h2, #signUpText h2 {
              margin: 0.5rem !important;
              font-size: 2rem !important;
            }
          }
        `}</style>
      </Head>

      <body className="font-poppins h-screen overflow-hidden">
        <div id="container" className={`relative min-h-screen overflow-hidden ${isSignInMode ? 'sign-in' : 'sign-up'}`}>
          {/* Background Animation */}
          <div
            id="background"
            className={`absolute top-0 right-0 h-screen w-[300vw] bg-gradient-to-br from-primary to-secondary transition-all duration-1000 ease-in-out z-10 shadow-2xl ${
              isSignInMode ? 'translate-x-0' : 'translate-x-[100%]'
            }`}
            style={{
              borderBottomRightRadius: 'max(50vw, 50vh)',
              borderTopLeftRadius: 'max(50vw, 50vh)',
              right: isSignInMode ? '50%' : '50%',
            }}
          ></div>

          {/* FORM SECTION */}
          <div className="flex flex-wrap h-screen mobile-responsive-container">
            {/* SIGN UP FORM */}
            <div
              id="signUpCol"
              className={`w-1/2 flex items-center justify-center text-center flex-col transition-all duration-1000 ease-in-out mobile-responsive ${
                isSignInMode ? 'md:translate-y-0 translate-y-full' : 'translate-y-0'
              }`}
            >
              <div className="w-full max-w-md">
                <div
                  id="signUpForm"
                  className={`p-4 bg-white rounded-3xl w-full shadow-2xl transition-all duration-500 ease-in-out ${
                    isSignInMode ? 'scale-0' : 'scale-100'
                  }`}
                >
                  {/* Username Input */}
                  <div className="relative w-full my-4">
                    <i className="bx bxs-user absolute top-1/2 left-4 transform -translate-y-1/2 text-xl text-gray-500"></i>
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full pl-12 pr-4 py-4 text-base bg-gray-100 rounded-lg border-2 border-white outline-none focus:border-primary transition-all duration-300"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative w-full my-4">
                    <i className="bx bx-mail-send absolute top-1/2 left-4 transform -translate-y-1/2 text-xl text-gray-500"></i>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full pl-12 pr-4 py-4 text-base bg-gray-100 rounded-lg border-2 border-white outline-none focus:border-primary transition-all duration-300"
                    />
                  </div>

                  {/* Password Input */}
                  <div className="relative w-full my-4">
                    <i className="bx bxs-lock-alt absolute top-1/2 left-4 transform -translate-y-1/2 text-xl text-gray-500"></i>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full pl-12 pr-4 py-4 text-base bg-gray-100 rounded-lg border-2 border-white outline-none focus:border-primary transition-all duration-300"
                    />
                  </div>

                  {/* Confirm Password Input */}
                  <div className="relative w-full my-4">
                    <i className="bx bxs-lock-alt absolute top-1/2 left-4 transform -translate-y-1/2 text-xl text-gray-500"></i>
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className="w-full pl-12 pr-4 py-4 text-base bg-gray-100 rounded-lg border-2 border-white outline-none focus:border-primary transition-all duration-300"
                    />
                  </div>

                  {/* Sign Up Button */}
                  <button className="cursor-pointer w-full py-3 rounded-lg border-none bg-primary text-white text-xl outline-none hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                    Sign up
                  </button>

                  {/* Switch to Sign In */}
                  <p className="my-4 text-xs">
                    <span>Already have an account?</span>
                    <b onClick={toggleMode} className="cursor-pointer text-primary hover:text-secondary ml-1">
                      Sign in here
                    </b>
                  </p>
                </div>
              </div>
            </div>

            {/* SIGN IN FORM */}
            <div
              id="signInCol"
              className={`w-1/2 flex items-center justify-center text-center flex-col transition-all duration-1000 ease-in-out mobile-responsive ${
                isSignInMode ? 'translate-y-0' : 'md:translate-y-0 translate-y-full'
              }`}
            >
              <div className="w-full max-w-md">
                <div
                  id="signInForm"
                  className={`p-4 bg-white rounded-3xl w-full shadow-2xl transition-all duration-500 ease-in-out ${
                    isSignInMode ? 'scale-100' : 'scale-0'
                  }`}
                >
                  {/* Username Input */}
                  <div className="relative w-full my-4">
                    <i className="bx bxs-user absolute top-1/2 left-4 transform -translate-y-1/2 text-xl text-gray-500"></i>
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full pl-12 pr-4 py-4 text-base bg-gray-100 rounded-lg border-2 border-white outline-none focus:border-primary transition-all duration-300"
                    />
                  </div>

                  {/* Password Input */}
                  <div className="relative w-full my-4">
                    <i className="bx bxs-lock-alt absolute top-1/2 left-4 transform -translate-y-1/2 text-xl text-gray-500"></i>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full pl-12 pr-4 py-4 text-base bg-gray-100 rounded-lg border-2 border-white outline-none focus:border-primary transition-all duration-300"
                    />
                  </div>

                  {/* Sign In Button */}
                  <button className="cursor-pointer w-full py-3 rounded-lg border-none bg-primary text-white text-xl outline-none hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                    Sign in
                  </button>

                  {/* Forgot Password */}
                  <p className="my-4 text-xs">
                    <b className="text-primary cursor-pointer hover:text-secondary">Forgot password?</b>
                  </p>

                  {/* Switch to Sign Up */}
                  <p className="my-4 text-xs">
                    <span>Don't have an account?</span>
                    <b onClick={toggleMode} className="cursor-pointer text-primary hover:text-secondary ml-1">
                      Sign up here
                    </b>
                  </p>
                </div>
              </div>

              {/* Social Login (Optional) */}
              <div
                id="socialList"
                className={`my-8 p-4 rounded-3xl w-full max-w-md shadow-2xl transition-all duration-500 ease-in-out ${
                  isSignInMode ? 'scale-100 delay-200' : 'scale-0'
                }`}
              >
                <div className="flex justify-center space-x-2">
                  <div className="bg-facebook text-white mx-2 py-3 px-4 cursor-pointer rounded-lg transform scale-0 transition-all duration-500 ease-in-out delay-[1.4s] hover:scale-110">
                    <i className="bx bxl-facebook text-2xl"></i>
                  </div>
                  <div className="bg-google text-white mx-2 py-3 px-4 cursor-pointer rounded-lg transform scale-0 transition-all duration-500 ease-in-out delay-[1.6s] hover:scale-110">
                    <i className="bx bxl-google text-2xl"></i>
                  </div>
                  <div className="bg-twitter text-white mx-2 py-3 px-4 cursor-pointer rounded-lg transform scale-0 transition-all duration-500 ease-in-out delay-[1.8s] hover:scale-110">
                    <i className="bx bxl-twitter text-2xl"></i>
                  </div>
                  <div className="bg-insta text-white mx-2 py-3 px-4 cursor-pointer rounded-lg transform scale-0 transition-all duration-500 ease-in-out delay-[2s] hover:scale-110">
                    <i className="bx bxl-instagram text-2xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className="absolute top-0 left-0 pointer-events-none z-20 w-full flex flex-wrap h-screen">
            {/* SIGN IN CONTENT */}
            <div className="w-1/2 flex items-center justify-center flex-col">
              <div
                id="signInText"
                className={`m-16 text-black ${
                  isSignInMode ? '' : 'opacity-0'
                }`}
              >
                <h2
                  className={`text-6xl font-extrabold my-8 transition-all duration-1000 ease-in-out ${
                    isSignInMode ? 'translate-x-0' : '-translate-x-[250%]'
                  }`}
                >
                  Welcome
                </h2>
                <p
                  className={`font-semibold transition-all duration-1000 ease-in-out delay-200 ${
                    isSignInMode ? 'translate-x-0' : '-translate-x-[250%]'
                  }`}
                >
                  Sign in to access your account
                </p>
              </div>
              <div
                id="signInImg"
                className={`transition-all duration-1000 ease-in-out delay-400 ${
                  isSignInMode ? 'translate-x-0' : '-translate-x-[250%]'
                }`}
              >
                <img src="/bg.png" alt="Welcome" className="w-96 rounded-2xl shadow-2xl" />
              </div>
            </div>

            {/* SIGN UP CONTENT */}
            <div className="w-1/2 flex items-center justify-center flex-col">
              <div
                id="signUpImg"
                className={`transition-all duration-1000 ease-in-out delay-400 ${
                  isSignInMode ? 'translate-x-[250%]' : 'translate-x-0'
                }`}
              >
                <img src="/bg.png" alt="Join Us" className="w-96 rounded-2xl shadow-2xl" />
              </div>
              <div
                id="signUpText"
                className={`m-16 text-white ${
                  isSignInMode ? 'opacity-0' : ''
                }`}
              >
                <h2
                  className={`text-6xl font-extrabold my-8 transition-all duration-1000 ease-in-out ${
                    isSignInMode ? 'translate-x-[250%]' : 'translate-x-0'
                  }`}
                >
                  Join with us
                </h2>
                <p
                  className={`font-semibold transition-all duration-1000 ease-in-out delay-200 ${
                    isSignInMode ? 'translate-x-[250%]' : 'translate-x-0'
                  }`}
                >
                  Create your account to get started
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default LoginPage;