import React, { useState } from "react";

import { InputText } from "primereact/inputtext";
import { AutoComplete } from "primereact/autocomplete";
import { houses } from "../../api/houses";
const SearchHouse = ({ selectedHouse, setSelectedHouse }) => {
  const [filteredHouses, setFilteredHouses] = useState(null);

  const search = (event) => {
    // Timeout to emulate a network connection
    setTimeout(() => {
      let _filteredHouses;

      if (!event.query.trim().length) {
        _filteredHouses = [...houses];
      } else {
        _filteredHouses = houses.filter((house) => {
          return house.address
            .toLowerCase()
            .includes(event.query.toLowerCase());
        });
      }

      setFilteredHouses(_filteredHouses);
    }, 250);
  };

  return (
    <AutoComplete
      field="address"
      value={selectedHouse}
      suggestions={filteredHouses}
      completeMethod={search}
      onChange={(e) => setSelectedHouse(e.value)}
      inputClassName="w-full"
      className="w-full"
      placeholder="Search"
      dropdown
      pt={{
        dropdownButton: { root: { className: "!bg-accent !border-accent" } },
      }}
    />
  );
};

export default SearchHouse;
