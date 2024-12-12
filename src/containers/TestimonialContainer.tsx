import React, { useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { fetchTestimonials } from "../redux/slices/testimonialSlice";

import arrow from "../assets/icons/arrow-black.svg";

const TestimonialContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { testimonials, loading, totalTestimonialPages } = useAppSelector(
    (state) => state.testimonials
  );
  
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchTestimonials(page));
  }, [dispatch, page]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid lg:grid-cols-2 gap-10">
      {/* Text */}
      <div className="flex flex-col gap-10">
        <h2 className="text-3xl lg:text-4xl font-bold">
          What People Are Saying About Us
        </h2>
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={testimonials.image}
              alt={testimonials.name}
            />
          </div>
          <div>
            <p className="font-bold">{testimonials.name}</p>
            <p className="text-sm text-gray-500">{testimonials.title}</p>
          </div>
        </div>
        <q>{testimonials.message}</q>
        <div className="lg:flex items-center gap-1 hidden ">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="disabled:opacity-50 bg-white border p-3 rounded-full"
          >
            <img className=" " src={arrow} alt="arrow icon" />
          </button>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalTestimonialPages}
            className="disabled:opacity-50 bg-white border p-3 rounded-full"
          >
            <img className=" rotate-180" src={arrow} alt="arrow icon" />
          </button>
        </div>
      </div>

      {/* IMAGE */}
      <div className="rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://picsum.photos/200/100"
          alt={testimonials.message}
        />
      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-center gap-1 lg:hidden ">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="disabled:opacity-50 bg-white border p-3 rounded-full"
          >
            <img className=" " src={arrow} alt="arrow icon" />
          </button>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalTestimonialPages}
            className="disabled:opacity-50 bg-white border p-3 rounded-full"
          >
            <img className=" rotate-180" src={arrow} alt="arrow icon" />
          </button>
        </div>
    </div>
  );
};

export default TestimonialContainer;
