import React from "react";
import Link from "next/link";
import Image from "next/image";
import { shadow } from "@/styles/utils";
import { Button } from "../ui/button";
function Header() {
    const user = null;
    return (
        <header
            className="bg-popover relative flex h-24 w-full items-center justify-between px-3"
            style={shadow}
        >
            <Link className="flex items-end gap-2" href="/">
                <Image
                    src="/bird.png"
                    alt="logo"
                    height={60}
                    width={60}
                    className="rounded-full"
                    priority
                />
                <h1 className="flex flex-col pb-1 text-2xl font-semibold leading-6">
                    AI <span>NOTES</span>
                </h1>
            </Link>
            <div className="flex gap-4">
                {user ? (
                    "Logout"
                ) : (
                    <>
                        <Button asChild>
                            <Link href="/sign-up" className="hidden sm:block">Sign Up</Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="/login">Login</Link>
                        </Button>
                    </>
                )}
            </div>
        </header>
    );
}
export default Header;
