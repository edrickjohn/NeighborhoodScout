import React, { useState } from "react";
import AuthLayout from "../../Layouts/AuthLayout";
import { InputText } from "primereact/inputtext";
import { Search } from "lucide-react";
import HousesDataView from "./HousesDataView";
const Home = () => {
  const [seachKey, setSearchKey] = useState("");
  return (
    <AuthLayout className="shadow-md ">
      <HousesDataView />

      {/* <span className="p-input-icon-left ">
        <Search className="h-4 w-4" />
        <InputText
          type="text"
          className="p-inputtext-sm  w-full"
          placeholder="Email"
        />
      </span> */}
    </AuthLayout>
  );
};

export default Home;
