import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { fetchProducts } from "../redux/slices/productSlice";
import arrow from "../assets/icons/arrow-black.svg";

const AllProductContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products, loading, productPage, totalProductPages } =
    useAppSelector((state) => state.products);

  const [page, setPage] = useState(productPage);

  useEffect(() => {
    dispatch(fetchProducts(page));
  }, [dispatch, page]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col gap-20">
      <header className="text-center flex flex-col justify-center items-center gap-10 mb-10">
        <h2 className="text-3xl lg:text-4xl font-semibold">All Product</h2>
        <p className="lg:w-1/2">
          The products we provide only for you as our service are selected from
          the best products with number 1 quality in the world
        </p>
      </header>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 gap-y-20">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-10">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white bg-white border p-3 rounded-full group hover:bg-accent"
        >
          <img className=" " src={arrow} alt="arrow icon" />
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalProductPages}
          className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white bg-white border p-3 rounded-full group hover:bg-accent"
        >
          <img className=" rotate-180" src={arrow} alt="arrow icon" />
        </button>
      </div>
    </div>
  );
};

export default AllProductContainer;
