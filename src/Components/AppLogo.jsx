import React from "react";
import { useNavigate } from "react-router-dom";

const AppLogo = ({ className }) => {
  const navigate = useNavigate();
  return (
    <img
      src="real_estate_logo.png"
      alt="logo"
      className={`  ${className}`}
      onClick={(e) => {
        navigate("/home");
      }}
    />
  );
};

export default AppLogo;
