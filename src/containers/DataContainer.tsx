import React, { useEffect } from "react";
import Data from "../components/Data";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { fetchData } from "../redux/slices/dataSlice";
import DataSkeleton from "../components/DataSkeleton";

const DataContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return (
      <div>
        <DataSkeleton />
      </div>
    );
  }

  return (
    <div>
      <Data data={data} />
    </div>
  );
};

export default DataContainer;
