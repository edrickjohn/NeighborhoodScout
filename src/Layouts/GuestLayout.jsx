import React from "react";

const GuestLayout = ({ children }) => {
  return (
    <div className="flex items-center min-h-[100vh] justify-center">
      {children}
    </div>
  );
};

export default GuestLayout;
