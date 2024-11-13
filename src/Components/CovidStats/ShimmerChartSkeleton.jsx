import React from "react";

const ShimmerChartSkeleton = () => {
    return (
        <div className="relative w-full h-[250px] bg-gray-200 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
            <div className="absolute w-full h-full flex flex-col justify-between p-4">
                <div className="h-3 w-1/2 bg-gray-300 rounded-md mb-2"></div>
                <div className="grid grid-cols-6 gap-1 mt-3">
                    {Array(6).fill("").map((_, i) => (
                        <div key={i} className="flex flex-col items-center space-y-1">
                            <div className="w-8 h-16 bg-gray-300 rounded-md"></div>
                            <div className="w-6 h-3 bg-gray-300 rounded-md"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShimmerChartSkeleton;
