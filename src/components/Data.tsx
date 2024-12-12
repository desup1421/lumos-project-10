import React from "react";
interface Data {
  experience: string;
  country: string;
  sold: string;
  variant: string;
}
interface DataProps {
  data: Data;
}

const Data: React.FC<DataProps> = ({data}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 divide-white relative lg:divide-x gap-y-10 bg-accent p-7 rounded-xl ">
      <div className="grid grid-cols-2 divide-x">
        {/* ITEM 1 */}
        <div className="flex gap-3 px-5 lg:px-16 text-center flex-col justify-center items-center text-white">
          <p className="font-semibold text-3xl lg:text-4xl">{data.experience}</p>
          <p className="font-light text-lg lg:text-xl">Years Experience</p>
        </div>

        {/* ITEM 2 */}
        <div className="flex gap-3 px-5 lg:px-16 text-center flex-col justify-center items-center text-white">
          <p className="font-semibold text-3xl lg:text-4xl">{data.country}</p>
          <p className="font-light text-lg lg:text-xl">
            Openned in the country
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 divide-x">
        {/* ITEM 3 */}
        <div className="flex gap-3 px-5 lg:px-16 text-center flex-col justify-center items-center text-white">
          <p className="font-semibold text-3xl lg:text-4xl">{data.sold}</p>
          <p className="font-light text-lg lg:text-xl">Furniture Sold</p>
        </div>

        {/* ITEM 4 */}
        <div className="flex gap-3 px-5 lg:px-16 text-center flex-col justify-center items-center text-white">
          <p className="font-semibold text-3xl lg:text-4xl">{data.variant}</p>
          <p className="font-light text-lg lg:text-xl">Variant Furniture</p>
        </div>
      </div>
    </div>
  );
};

export default Data;
