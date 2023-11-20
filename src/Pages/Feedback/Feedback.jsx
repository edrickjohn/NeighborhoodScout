import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import AuthLayout from "../../Layouts/AuthLayout";
import { Rating } from "primereact/rating";
import { toast } from "react-toastify";
const Feedback = () => {
  const [value, setValue] = useState("");
  const [rating, setRating] = useState(0);
  const handleSubmit = () => {
    setValue("");
    setRating(0);
    toast.success(`Your feedback has been submitted!`, {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div>
        <span className="font-semibold">Rating</span>
        <Rating value={rating} onChange={(e) => setRating(e.value)} required />
      </div>

      <div>
        <InputTextarea
          placeholder="Your feedback is important to us!"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={10}
          className="w-full"
          required
        />
      </div>

      <Button
        label="SUBMIT"
        className="ml-auto w-fit"
        severity="success"
      ></Button>
    </form>
  );
};

export default Feedback;
