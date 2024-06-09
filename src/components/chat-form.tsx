"use client";
import { postMessage } from "@/app/action";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRef } from "react";
import SubmitButton from "./submit-button";

export default function ChatForm() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      action={async (formData) => {
        await postMessage(formData);
        formRef.current?.reset();
      }}
      ref={formRef}
      className="p-6 fixed bottom-0 left-0 w-full bg-background"
    >
      <div className="flex gap-x-2">
        <Input
          type="text"
          name="message"
          placeholder="Type your message...."
          className="flex-grow py-2 outline-none"
        />

        <SubmitButton/>
      </div>
    </form>
  );
}
