import React from "react";

const ShimmerLocationMapSkeleton = () => {
  return (
    <div className="bg-red-800 animate-pulse h-full w-full">
      <div className="object-cover object-center h-full w-full bg-gray-300" />
    </div>
  );
};

export default ShimmerLocationMapSkeleton;
