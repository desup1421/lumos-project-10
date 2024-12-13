import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { subscribeEmail, resetStatus } from "../redux/slices/emailSlice";

import banner from "../assets/images/lamp.png";

const SubscribeContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, success, error } = useAppSelector((state) => state.email);
  const [data, setData] = useState<string>("");

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(data);
    dispatch(subscribeEmail(data));
  };

  useEffect(() => {
    if(success) {
      alert('Berhasil');
      setData('');
      dispatch(resetStatus());
    }
  }, [success, dispatch])

  useEffect(() => {
    if(error) {
      alert(error);
    }
  }, [error])

  return (
    <div className="relative w-full h-full overflow-hidden border">
      <div className="absolute lg:relative h-full">
        <img
          className="h-full lg:h-auto object-cover object-center"
          src={banner}
          alt="lamp background"
        />
      </div>

      <div className="relative lg:absolute w-full h-full bg-blach/10 top-0 left-0 grid lg:grid-cols-2 py-10">
        <div></div>
        <div className="flex flex-col justify-center items-center gap-8 text-white">
          <h2 className="font-semibold text-3xl lg:text-4xl w-4/6">
            Get more discount Off your order
          </h2>
          <p className="w-4/6">Join our mailing list</p>
          <form onSubmit={handleSubmit} className="flex gap-4 w-4/6">
            <label className="hidden" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="p-2 px-5 w-full rounded-md text-primary outline-none active:outline-1"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
            <button
              disabled={loading}
              className="p-2 px-5 bg-primary rounded-md text-nowrap disabled:opacity-50"
            >
              Shop Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeContainer;
