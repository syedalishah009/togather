import React from "react";
import {  useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col justify-between h-screen">
      <div className="absolute h-screen w-screen flex justify-center items-center">
        <div className="w-[200px]flex flex-col justify-center items-center">
          <p className="text-center text-[85px]">404</p>
          <p className="text-center text-[34px]">Not Found</p>
          <p className="text-center text-[14px] text-[#4C4D4F80]">
            We’re sorry, the page you requested could not be found
          </p>
          <p className="text-center">
            <button
              onClick={() => navigate("/")}
              className="px-[41px] mx-auto py-[15px] mt-[29px] bg-black text-white rounded-[24px] z-40"
            >
              Let’s Go Back To Home Page
            </button>
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <img
          className="w-[100px] md:w-[230px] md:h-[300px] lg:w-[230px]"
          src="./images/404Page/Vector.png"
          alt=""
        />
        <img
          className="w-[200px] md:w-[250px] lg:w-[363px] lg:h-[400px]"
          src="./images/404Page/Vector (2).png"
          alt=""
        />
      </div>
      <div className="flex justify-between  w-full">
        <img
          className="w-[180px] md:w-[350px] lg:w-[450px]"
          src="./images/404Page/Vector (3).png"
          alt=""
        />
        <img
          className="w-[100px] md:w-[350px] md:h-[500px] lg:w-[400px]"
          src="./images/404Page/Vector (1).png"
          alt=""
        />
      </div>
    </div>
  );
};

export default PageNotFound;
