import React from "react";
interface ProductCardProps {
  data: {
    id: number;
    title: string;
    image: string;
    price: number;
    price_after_discount?: number | null;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="flex justify-center">
      <div className="grid gap-5">
        <div className="w-64 h-64 rounded-lg overflow-hidden border">
          <img
            className="w-full h-full object-cover"
            src={data.image}
            alt={data.title}
          />
        </div>
        <h3 className="font-semibold text-xl">{data.title}</h3>
        <p className="flex gap-5">
          <span>{`$${data.price_after_discount || data.price}`}</span>
          <span className="line-through text-sm text-gray-500">{`${
            data.price_after_discount ? "$" + data.price : ""
          }`}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
