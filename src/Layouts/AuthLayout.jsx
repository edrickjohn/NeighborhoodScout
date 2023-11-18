import React from "react";
import { useNavigate } from "react-router";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto text-white   bg-white min-h-[100vh] ">
      <nav className=" bg-secondary">
        <img
          src="real_estate_logo.png"
          alt="logo"
          className="h-20 bg-white"
          onClick={(e) => {
            navigate("/home");
          }}
        />
      </nav>

      <div className="">{children}</div>
    </div>
  );
};

export default AuthLayout;
