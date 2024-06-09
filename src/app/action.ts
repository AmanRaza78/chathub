"use server";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function postMessage(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const Pusher = require("pusher")  

  if (!user) {
    return redirect("/api/auth/login");
  }
  const message = formData.get("message") as string;

  const data = await prisma.message.create({
    data: {
      message: message,
      userId: user.id,
    },
  });

  const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.NEXT_PUBLIC_PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: "ap2",
    useTLS: true
  });

  await pusher.trigger("chat", "chat-event", {
    message: `${JSON.stringify(data)}\n\n`
  });

}
