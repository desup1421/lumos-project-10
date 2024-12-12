import React from "react";
import check from "../assets/icons/check.svg";
import sofa from "../assets/images/sofa.png";

const WeCreateSection: React.FC = () => {
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
      {/* IMAGE */}
      <div className="rounded-md overflow-hidden">
        <img className="h-full object-cover" src={sofa} alt="sofa image" />
      </div>
      {/* TEXT */}
      <div className="grid gap-8">
        {/* TITLE */}
        <h2 className="font-bold text-3xl lg:text-4xl">
          We Create Your Home More Aestetic
        </h2>

        {/* DESCRIPTION */}
        <p>
          Furnitre power is a software as services for multiperpose business
          management system,
        </p>

        {/* FEATURES */}
        <ul className="grid gap-10">
          {/* LIST 1 */}
          <li className="flex gap-4">
            <img className="w-5 self-start" src={check} alt="Checklist icon" />
            <div>
              <h3 className="font-bold text-lg">Valuation Services</h3>
              <p>
                Sometimes features require a short description. This can be
                detailed description
              </p>
            </div>
          </li>
          {/* LIST 2 */}
          <li className="flex gap-4">
            <img className="w-5 self-start" src={check} alt="Checklist icon" />
            <div>
              <h3 className="font-bold text-lg">Development of Furniture Modelss
              </h3>
              <p>
                Sometimes features require a short description. This can be
                detailed description
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeCreateSection;
