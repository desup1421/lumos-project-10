import React, { useEffect } from "react";
import Hero from "../components/Hero";
import HeroSkeleton from "../components/HeroSkeleton";
import { fetchHeader } from "../redux/slices/headerSlice";
import { RootState } from "../redux/store";
import { useAppSelector, useAppDispatch } from "../redux/hooks";

const HeaderContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { header, loading } = useAppSelector(
    (state: RootState) => state.header
  );

  useEffect(() => {
    dispatch(fetchHeader());
  }, [dispatch]);

  if (loading) {
    return <HeroSkeleton />;
  }

  return <Hero header={header} />;
};

export default HeaderContainer;
