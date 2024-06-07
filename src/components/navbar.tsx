import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function Navbar(){
    return(
        <nav className="border-b bg-background h-[10vh] flex items-center">
            <div className="container flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-3xl text-primary font-bold">ChatHub</h1>
                </Link>

                <div className="flex items-center gap-x-5">
                    <ModeToggle/>

                    <div className="flex items-center gap-x-5">
                        <Link href="/">
                            <Button>Login</Button>
                        </Link>

                        <Link href="/">
                            <Button>Sign Up</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}