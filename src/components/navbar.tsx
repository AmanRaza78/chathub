import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {
  const { isAuthenticated } = getKindeServerSession();
  return (
    <nav className="border-b bg-background h-[10vh] flex items-center">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl text-primary font-bold">ChatHub</h1>
        </Link>

        <div className="flex items-center gap-x-5">
          <ModeToggle />

          {(await isAuthenticated()) ? (
            <LogoutLink>
              {" "}
              <Button>Logout</Button>
            </LogoutLink>
          ) : (
            <div className="flex items-center gap-x-5">
              <LoginLink>
                <Button>Login</Button>
              </LoginLink>

              <RegisterLink>
                <Button>Sign Up</Button>
              </RegisterLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
