import React from "react";
import Header from "../types/Header";

interface HeroProps {
  header: Header;
}

const Hero: React.FC<HeroProps> = ({header}) => {
  return (
    <div className="relative w-full h-lvh lg:h-auto flex justify-center items-center">
      <img
        className="w-full h-full lg:h-full object-cover object-right lg:object-bottom"
        src={header.banner}
        alt="Hero Image"
      />

      <div className="absolute bg-black/10 w-full h-full flex flex-col justify-center items-center">
        <div className="text-white text-center flex flex-col lg:mt-20 items-center gap-16">
          {/* TITLE */}
          <h1 className="text-3xl lg:text-6xl font-bold w-3/4">
            {header.title}
          </h1>

          {/* DESCRIPTION */}
          <p className="text-md lg:text-xl font-thin w-4/6">
            {header.description}
          </p>

          {/* BUTTON */}
          <button className="backdrop-blur-lg bg-white/30 py-4 px-20 rounded-lg self-center">
            <span className="font-bold">Shop Now</span>
          </button>
        </div>
      </div>
      <div className="absolute bg-gradient-to-t from-white w-full h-32 bottom-0"></div>
    </div>
  );
};

export default Hero;
