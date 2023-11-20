import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { useHouses } from "../../contexts/HousesContext";
import AuthLayout from "../../Layouts/AuthLayout";

import HouseCardList from "../Home/HouseCardList";

const View = () => {
  const { data } = useHouses();
  const { houseId } = useParams();
  const house_details = data.filter((house) => {
    return house.id == houseId;
  });

  return (
    <AuthLayout>
      <div className="">
        <HouseCardList house={house_details[0]} />
      </div>
    </AuthLayout>
  );
};

export default View;
