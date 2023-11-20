import React, { useState, createContext, useContext, useEffect } from "react";

// Create a context
const HousesContext = createContext();

// Create a provider component
export const HousesProvider = ({ children }) => {
  const storedData = JSON.parse(localStorage.getItem("housesData")) || [];
  const [data, setData] = useState(
    storedData.length > 0
      ? storedData
      : [
          {
            id: 1000501,
            address: "N82 7328, Cantanhede, Lisboa",
            image: "house_1",
            crime_rating: 0,
            school_rating: 5,
            amenities: ["Swimming Pool"],
            transportations: ["Bus", "Subway", "Tricycle", "Grab"],
            saved: 1,
          },
          {
            id: 1000502,
            address: "N3 8781 Mealhada, Viseu",
            image: "house_1",
            crime_rating: 3,
            school_rating: 3,
            amenities: [],
            transportations: ["Tricycle", "Grab"],
            saved: 0,
          },
          {
            id: 1000503,
            address: "796 Waters Road Territoires du Nord-Ouest",
            image: "house_2",
            crime_rating: 1,
            school_rating: 0,
            amenities: ["Gym"],
            transportations: ["Subway", "Tricycle"],
            saved: 0,
          },
          {
            id: 1000504,
            address: "7098 Oberbrunner View, Runteton",
            image: "house_3",
            crime_rating: 0,
            school_rating: 5,
            amenities: ["Swimming Pool", "Gym"],
            transportations: ["Bus", "Subway", "Tricycle", "Grab"],
            saved: 0,
          },
          {
            id: 1000505,
            address: "717 Wunsch Manors, Gretchentown, Saskatchewan",
            image: "house_3",
            crime_rating: 5,
            school_rating: 3,
            amenities: ["Gym"],
            transportations: [],
            saved: 0,
          },
          {
            id: 1000506,
            address: "2669 Wiza Route, Yukon",
            image: "house_4",
            crime_rating: 0,
            school_rating: 4,
            amenities: ["Swimming Pool", "Gym"],
            transportations: ["Bus", "Subway", "Grab"],
            saved: 0,
          },
          {
            id: 1000507,
            address: "76062 Kohler Villages, Yukon",
            image: "house_1",
            crime_rating: 0,
            school_rating: 3,
            amenities: ["Swimming Pool", "Gym"],
            transportations: ["Tricycle"],
            saved: 0,
          },
          {
            id: 1000508,
            address: "7759 Helene Trafficway, Alberta",
            image: "house_5",
            crime_rating: 0,
            school_rating: 5,
            amenities: ["Swimming Pool", "Gym"],
            transportations: ["Subway", "Tricycle", "Grab"],
            saved: 0,
          },
          {
            id: 1000509,
            address: "05 Hessel Boulevard, New South Wales",
            image: "house_6",
            crime_rating: 1,
            school_rating: 5,
            amenities: ["Swimming Pool", "Gym"],
            transportations: ["Bus", , "Grab"],
            saved: 0,
          },
        ]
  );

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
