import React from "react";
import kitchen from "../assets/images/kitchen.png";

const BestFurniture: React.FC = () => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
      {/* TEXT */}
      <div className="grid gap-8">
        <h2 className="font-bold text-3xl lg:text-4xl">
          The Best Furniture Manufacturer of your choice
        </h2>
        <p>
          Furnitre power is a software as services for multiperpose business
          management system, expecially for them who are running two or more
          business exploree the future Furnitre power is a software as services\
        </p>
      </div>
      {/* IMAGE */}
      <div className="rounded-md overflow-hidden">
        <img className="h-full object-cover" src={kitchen} alt="sofa image" />
      </div>
    </div>
  );
};

export default BestFurniture;
