import React, { useState } from "react";

import GuestLayout from "./../../Layouts/GuestLayout";
import { Button } from "primereact/button";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
const Login = () => {
  const [module, setModule] = useState("Login");
  return (
    <GuestLayout>
      <section className="bg-secondary  w-[400px] rounded-md  text-white p-5 ">
        <div className="flex justify-evenly  font-bold">
          <Button
            label="LOGIN"
            className={`p-1.5 py-2 w-full hover:bg-accent/90  shadow-md ${
              module == "Login" ? "!bg-accent border-[1.5px]" : "!bg-primary"
            }`}
            onClick={(e) => {
              setModule("Login");
            }}
          ></Button>
          <Button
            label="REGISTER"
            className={`p-1.5 py-2 w-full hover:bg-accent/90  shadow-md ${
              module == "Register" ? "!bg-accent border-[1.5px]" : "!bg-primary"
            }`}
            onClick={(e) => {
              setModule("Register");
            }}
          ></Button>
          {/* <button
            className={`p-1.5 py-2 w-full hover:bg-accent/90 shadow-md  ${
              module == "Login" ? "bg-accent border-[1.5px]" : "bg-primary"
            }`}
            onClick={(e) => {
              setModule("Login");
            }}
          >
            LOGIN
          </button> */}

          {/* <button
            className={`p-1.5 py-2 w-full hover:bg-accent/90  shadow-md ${
              module == "Register" ? "bg-accent border-[1.5px]" : "bg-primary"
            }`}
            onClick={(e) => {
              setModule("Register");
            }}
          >
            REGISTER
          </button> */}
        </div>
        <section className="my-10 ">
          {module == "Login" ? <LoginForm /> : <RegisterForm />}
        </section>
      </section>
    </GuestLayout>
  );
};

export default Login;
