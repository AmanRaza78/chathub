"use client";
import { useState } from "react";

interface MessageBoxProps {
  data: {
    user: {
      firstname: string;
    };
    message: string;
  }[];
}

export default function MessageBox({ data }: MessageBoxProps) {
  const [totalMessages, setTotalMessages] = useState(data);

  return (
    <div className="p-6 flex-grow max-h-screen overflow-y-auto">
      <div className="flex flex-col gap-4">
        {totalMessages.map((m, i) => (
          <div key={i} className="w-full">
            <div className="flex items-center justify-start">
              <div className="flex flex-col rounded-lg bg-background p-4 shadow-md self-start w-full sm:w-3/4 lg:w-1/2">
                <p className="text-base">{m.message}</p>
                <p className="text-sm text-muted-foreground">By: {m.user.firstname}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
