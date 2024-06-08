import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="block font-medium text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            ChatHub: Connecting Conversations in Real Time
          </h1>
        </div>

        <div className="max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-400">
            We facilitate immediate and seamless communication.
          </p>
        </div>
        <div className="text-center">
          <LoginLink href="/">
            <Button className="shadow-lg">Get Started</Button>
          </LoginLink>
        </div>
      </div>
    </div>
  );
}
