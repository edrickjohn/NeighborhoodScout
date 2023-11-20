import React from "react";
import AuthLayout from "../../Layouts/AuthLayout";
import { useHouses } from "../../contexts/HousesContext";
import HousesDataView from "../Home/HousesDataView";
const Saved = () => {
  const { data, setData } = useHouses();
  const saved_houses = data.filter((house) => {
    return house.saved == true;
  });

  return (
    <AuthLayout>
      <HousesDataView api_houses={saved_houses} />
    </AuthLayout>
  );
};

export default Saved;
