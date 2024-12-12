import React from "react";

interface NewCardProps {
  image: string;
  title: string;
}
const NewCard: React.FC<NewCardProps> = ({image, title}) => {
  return (
    <div className="w-52 h-80 rounded-lg overflow-hidden relative flex-shrink-0">
      <img
        className="w-full h-full object-cover"
        src={image}
        alt={title}
      />
      <p className="absolute bottom-0 left-0 w-full h-10 font-bold text-white text-xl text-center">
        {title}
      </p>
    </div>
  );
};

export default NewCard;
