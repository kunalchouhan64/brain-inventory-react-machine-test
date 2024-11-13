import React from 'react';

const LiveUpdateUI = () => {
  return (
    <div className="w-full font-Poppins px-5 md:px-1 animate-pulse">
      <div className="flex items-center space-x-2 mb-3">
        <div className="h-5 w-24 bg-gray-300 rounded-md"></div>
        <div className="h-4 w-16 bg-gray-200 rounded-md"></div>
      </div>
      <div className="space-y-4">
        {Array(7).fill("").map((_, i) => (
          <div key={i} className="flex items-center space-x-3 py-2">
            <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
            <div className="h-4 w-3/4 bg-gray-300 rounded-md"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveUpdateUI;
