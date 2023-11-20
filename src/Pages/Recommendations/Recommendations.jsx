import React from "react";
import AuthLayout from "../../Layouts/AuthLayout";
import { useHouses } from "../../contexts/HousesContext";
import HouseCardList from "../Home/HouseCardList";
import HousesDataView from "../Home/HousesDataView";
const Recommendations = () => {
  const { data } = useHouses();
  const recommended = data.filter((house) => {
    return house.crime_rating == 0 && house.school_rating == 5;
  });

  return (
    <AuthLayout>
      <HousesDataView api_houses={recommended} />
    </AuthLayout>
  );
};

export default Recommendations;
