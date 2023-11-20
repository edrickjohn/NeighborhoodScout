import React, { useState, useEffect } from "react";
import AuthLayout from "../../Layouts/AuthLayout";
import { InputText } from "primereact/inputtext";
import { Search } from "lucide-react";

import HousesDataView from "./HousesDataView";
import { useHouses } from "../../contexts/HousesContext";
const Home = () => {
  const { data, setData } = useHouses();
  // const newData = data.filter((house) => {
  //   return house.saved == false;
  // });

  return (
    <AuthLayout className="shadow-md ">
      <HousesDataView api_houses={data} />
    </AuthLayout>
  );
};

export default Home;
