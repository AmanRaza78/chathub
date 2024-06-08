import { postMessage } from "@/app/action";
import { Button } from "./ui/button";
import { Input } from "./ui/input";


export default function ChatForm() {
  return (
    <form
      action={postMessage}
      className="p-6 fixed bottom-0 left-0 w-full bg-background "
    >
      <div className="flex gap-x-2">
        <Input
          type="text"
          name="message"
          placeholder="Type your message...."
          className="flex-grow py-2 outline-none"
        />

        <Button type="submit" className="rounded-full">
          Send
        </Button>
      </div>
    </form>
  );
}
