"use client";
import Pusher from "pusher-js";
import { useEffect, useRef, useState } from "react";

interface MessageBoxProps {
  data: {
    user: {
      firstname: string | null;
    };
    message: string;
  }[];
}

export default function MessageBox({ data }: MessageBoxProps) {
  const [totalMessages, setTotalMessages] = useState(data);
  const messageEndRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    var pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
      cluster: "ap2",
    });

    var channel = pusher.subscribe("chat");
    channel.bind("chat-event", function (data: any) {
      try {
        const parsedMessages = JSON.parse(data.message);
        setTotalMessages((prev) => [...prev, parsedMessages]);
      } catch (error) {
        console.error("Error parsing message data:", error);
      }
    });

    return () => {
      pusher.unsubscribe("chat");
    };
  }, []);

  const scrollTobottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollTobottom();
  }, [totalMessages]);

  return (
    <div className="p-6 flex-grow max-h-screen overflow-y-scroll mb-20">
      <div className="flex flex-col gap-4">
        {totalMessages.map((m, i) => (
          <div key={i} className="w-full">
            <div className="flex items-center justify-start">
              <div className="flex flex-col rounded-lg bg-background p-4 shadow-md self-start w-full sm:w-3/4 lg:w-1/2">
                <p className="text-base">{m.message}</p>
                <p className="text-sm text-muted-foreground">
                  By: {m.user?.firstname ?? "unknown"}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div ref={messageEndRef}></div>
      </div>
    </div>
  );
}
