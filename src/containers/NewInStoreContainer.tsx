import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { fetchCategories } from "../redux/slices/productSlice";

import NewCard from "../components/NewCard";
import arrow from "../assets/icons/arrow-black.svg";

const NewInStoreContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categories, loading } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if(loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="w-full lg:w-64 lg:min-h-64 flex lg:flex-col flex-row lg:justify-between lg:flex-shrink-0">
        <h2 className="w-full lg:w-auto font-bold text-3xl lg:text-4xl">New In Store Now</h2>
        <p>Get the latest items immediately with promo prices</p>
        <a className="lg:flex underline gap-1 hidden" href="#">
          Check All
          <img className="rotate-180" src={arrow} alt="arrow icon" />
        </a>
      </div>
      <div className="flex gap-5 overflow-x-scroll scroll-smooth">
        {
          categories.map((category, index) => (
            <NewCard
              key={index}
              image={category.image}
              title={category.title}
            />
          ))
        }
      </div>
    </div>
  );
};

export default NewInStoreContainer;
