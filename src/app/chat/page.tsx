import ChatForm from "@/components/chat-form";
import MessageBox from "@/components/message-box";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

async function getData() {
  const data = await prisma.message.findMany({
    select: {
      message: true,
      id: true,
      user: {
        select: {
          firstname: true,
        },
      },
    },
    orderBy: {
      createdAt: "asc",
    },
    take: 50,
  });

  return data;
}

export default async function ChatRoom() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  const data = await getData();
  return (
    <div className="h-screen bg-muted flex flex-col overflow-y-scroll">
      <MessageBox data={data} />
      <ChatForm />
    </div>
  );
}
