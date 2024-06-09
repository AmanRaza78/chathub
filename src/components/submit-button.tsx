"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled className="rounded-full">Sending...</Button>
      ) : (
        <Button type="submit" className="rounded-full">Send</Button>
      )}
    </>
  );
};

export default SubmitButton;
