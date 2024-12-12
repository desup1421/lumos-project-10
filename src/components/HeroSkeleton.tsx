import React from "react";

const HeroSkeleton: React.FC = () => {
  return (
    <div
      data-testid="card-skeleton"
      className="animate-pulse border flex flex-col gap-3"
    >
      <div className="w-full h-screen rounded-md flex flex-col justify-center items-center gap-10">
        <div className="bg-gray-300 h-5 rounded-lg w-5/6"></div>
        <div className="bg-gray-300 h-5 rounded-lg w-4/6"></div>
        <div className="bg-gray-300 h-10 rounded-lg w-40"></div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
