import React, { useState, createContext, useContext, useEffect } from "react";

import { houses } from "./../api/houses";
// Create a context
const HousesContext = createContext();

// Create a provider component
export const HousesProvider = ({ children }) => {
  const storedData = JSON.parse(localStorage.getItem("housesData")) || [];
  const [data, setData] = useState(storedData.length > 0 ? storedData : houses);

  const updateSavedValue = (id, newSavedValue) => {
    setData((prevData) =>
      prevData.map((house) =>
        house.id === id ? { ...house, saved: newSavedValue } : house
      )
    );
  };

  useEffect(() => {
    // Save data to local storage whenever it changes
    localStorage.setItem("housesData", JSON.stringify(data));
  }, [data]);

  const value = {
    data,
    setData,
    updateSavedValue,
  };

  return (
    <HousesContext.Provider value={value}>{children}</HousesContext.Provider>
  );
};

// Create a custom hook to use the context
export const useHouses = () => {
  const context = useContext(HousesContext);
  if (!context) {
    throw new Error("useHouses must be used within a HousesProvider");
  }
  return context;
};

// Your component that uses the context
const Houses = () => {
  const { data, setData, updateSavedValue } = useHouses();

  // Your component logic here

  return data;
};

export default Houses;
