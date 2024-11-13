import React from "react";

const ShimmerCountryStatsSkeleton = () => {
  return (
    <div className="my-4 font-Poppins flex flex-col lg:flex-row justify-center md:justify-center items-center bg-white shadow-lg shadow-gray-200 rounded-3xl px-8 py-3 w-full animate-pulse">
      <div className="w-full">
        <div className="h-6 w-1/3 bg-gray-300 rounded-md mb-2"></div>
        <div className="space-y-3 sm:py-5 w-full">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="h-4 w-1/4 bg-gray-300 rounded-md"></div>
              <div className="h-4 w-1/2 bg-gray-300 rounded-md"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full justify-center items-center md:justify-start h-auto md:items-start mt-5 lg:mt-0">
        <div className="relative w-full">
          <div className="h-[15.5rem] w-full bg-gray-300 rounded-full"></div>
          <div className="absolute top-[6.6rem] left-[4.6rem] lg:top-24 lg:left-36 xl:left-36 xl:top-24 text-center font-Poppins">
            <div className="h-6 w-16 bg-gray-300 rounded-md mb-1"></div>
            <div className="h-4 w-20 bg-gray-300 rounded-md"></div>
          </div>
        </div>

        <div className="flex space-y-1 space-x-4 flex-col justify-center items-center md:justify-start md:items-start text-center w-full mt-4">
          {["#FB4B62", "#8DCC28", "#04C4F7"].map((color, index) => (
            <div key={index} className="flex items-center w-full justify-between text-xs sm:text-base md:text-lg">
              <div className="flex items-center">
                <span className={`w-3 h-3 mr-2 rounded-full bg-${color} inline-block`}></span>
                <div className="h-4 w-16 bg-gray-300 rounded-md"></div>
              </div>
              <div className="h-4 w-10 bg-gray-300 rounded-md"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerCountryStatsSkeleton;
