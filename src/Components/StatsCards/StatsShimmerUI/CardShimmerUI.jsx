import React from 'react';

// Shimmer component for loading placeholder
const CardShimmerUI = () => {
    return (
        <div className='flex flex-col items-start justify-start bg-gray-200 shadow-lg shadow-gray-200 rounded-3xl p-6 w-full animate-pulse'>
            {/* Shimmer for chart */}
            <div className='w-full h-20 bg-gray-300 rounded-md mb-4'></div>
            
            {/* Shimmer for data */}
            <div className='w-1/2 h-6 bg-gray-300 rounded-md mb-2'></div>
            <div className='w-1/4 h-4 bg-gray-300 rounded-md'></div>
            
            {/* Shimmer for title */}
            <div className='w-3/4 h-6 bg-gray-300 rounded-md mt-4'></div>
        </div>
    );
};

export default CardShimmerUI;