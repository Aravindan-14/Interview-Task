import React from "react";

const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[450px] animate-pulse w-full">
      {/* Skeleton Image */}
      <div className="w-full h-48 bg-gray-300"></div>

      {/* Skeleton Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="mt-3 h-4 bg-gray-300 rounded w-full"></div>
        <div className="mt-3 h-4 bg-gray-300 rounded w-5/6"></div>

        {/* Footer Section */}
        <div className="mt-auto flex items-center justify-between">
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          <div className="h-8 bg-gray-300 rounded w-24"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
