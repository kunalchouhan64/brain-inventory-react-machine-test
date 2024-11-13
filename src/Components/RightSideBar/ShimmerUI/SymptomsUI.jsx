import React from "react";

const SymptomsUI = () => {
  return (
    <div className="flex transition-all ease-linear duration-300 cursor-pointer font-Poppins justify-start items-start md:justify-center md:items-center my-2 md:my-5 lg:my-6 xl:my-8 w-full p-5 animate-pulse">
      <div className="w-full h-auto p-6 rounded-xl shadow-lg bg-gray-300">
        <div className="flex flex-col items-center text-center text-white">
          <div className="w-56 h-56 bg-gray-200 rounded-full mb-4"></div>
          <div className="w-full space-x-2 flex justify-between">
            <div className="flex flex-col space-y-2">
              <div className="h-6 w-32 bg-gray-200 rounded-md"></div>
              <div className="h-4 w-48 bg-gray-200 rounded-md"></div>
              <div className="h-4 w-40 bg-gray-200 rounded-md"></div>
            </div>
            <div>
              <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomsUI;
