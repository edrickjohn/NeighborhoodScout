import React, { useState, useEffect } from "react";
import AuthLayout from "../../Layouts/AuthLayout";
import HouseCard from "../Home/HouseCard";
import SearchHouse from "./SearchHouse";

const Compare = () => {
  const [selectedHouse1, setSelectedHouse1] = useState();
  const [selectedHouse2, setSelectedHouse2] = useState();

  //   useEffect(() => {
  //     alert(JSON.stringify(selectedHouse1));
  //   }, [selectedHouse1]);

  return (
    <AuthLayout>
      <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center my-10 gap-4 px-10 text-gray-800">
        <div className="w-full">
          <SearchHouse
            selectedHouse={selectedHouse1}
            setSelectedHouse={setSelectedHouse1}
          />
          {selectedHouse1 && <HouseCard house={selectedHouse1} />}
        </div>
        <div className="w-full">
          <SearchHouse
            selectedHouse={selectedHouse2}
            setSelectedHouse={setSelectedHouse2}
          />

          {selectedHouse2 && <HouseCard house={selectedHouse2} />}
        </div>
      </div>
    </AuthLayout>
  );
};

export default Compare;
