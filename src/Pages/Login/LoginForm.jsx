import React, { useState } from "react";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { KeyRound, Mail, LogIn } from "lucide-react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className=" flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
      <small className="text-center">Welcome to Neighborhood Scout!</small>
      <span className="p-input-icon-left ">
        <Mail className="h-4 w-4" />
        <InputText
          type="email"
          className="p-inputtext-sm  w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </span>
      <span className="p-input-icon-left ">
        <KeyRound className="h-4 w-4" />
        <InputText
          className="p-inputtext-sm w-full"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </span>

      <Button size="small" label="SUBMIT" className=" !bg-accent"></Button>
    </form>
  );
};

export default LoginForm;
