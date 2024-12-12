import React, { useEffect, useRef } from "react";
import  { useAppDispatch } from "../redux/hooks";
import { setNAvbarTransparency } from "../redux/slices/navbarSlice";
// COMPONENTS
import HeaderContainer from "../containers/HeaderContainer";
import WeCreateSection from "../components/WeCreateSection";
// import NewInStoreSection from "../components/NewInStoreSection";
import BestFurniture from "../components/BestFurniture";
import AllProduct from "../components/AllProduct";
import TestimonialSection from "../components/TestimonialSection";
import MailingListSection from "../components/MailingListSection";
import NewInStoreContainer from "../containers/NewInStoreContainer";
import DataContainer from "../containers/DataContainer";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        dispatch(setNAvbarTransparency(entry.isIntersecting));
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, [dispatch])

  return (
    <>
      {/* HeaderContainer SECTION */}
      <section ref={headerRef}>
        <HeaderContainer />
      </section>

      <section className="px-5 lg:px-32 py-10 -mt-24 lg:-mt-40">
        <DataContainer />
      </section>

      {/* WE CREATE YOUR HOME */}
      <section className="px-5 lg:px-32 py-10">
        <WeCreateSection />
      </section>

      {/* NEW IN STORE */}
      <section className="px-5 lg:px-32 py-10">
        <NewInStoreContainer />
      </section>

      {/* BEST FURNITURE */}
      <section className="px-5 lg:px-32 py-10">
        <BestFurniture />
      </section>

      {/* ALL PRODUCT */}
      <section className="px-5 lg:px-32 py-10">
        <AllProduct />
      </section>

      {/* TESTIMONIAL */}
      <section className="px-5 lg:px-32 py-10">
        <TestimonialSection />
      </section>

      {/* MAILING LIST */}
      <section className="px-5 lg:px-32 py-10">
        <MailingListSection />
      </section>
    </>
  );
};

export default Home;
