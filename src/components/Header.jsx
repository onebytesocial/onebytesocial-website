import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="my-4 flex items-center justify-between text-white flex-col sm:flex-row gap-5 sm:gap-0 bg-zinc-900 max-w-7xl">
            <Link className="flex items-center justify-center gap-2" href="/">
                <Image
                    src="/assets/logo.jpg"
                    alt="One Byte Social Logo"
                    width={60}
                    height={60}
                    className="rounded-full"
                />
                <Image
                    src="/assets/logo2.png"
                    alt="One Byte Social Logo"
                    width={300}
                    height={60}
                    className="rounded-full"
                />
            </Link>
            <div className="flex items-center justify-center gap-6 text-xl">
                <a href="mailto:onebytesocial@gmail.com">Contact</a>
                <a
                    className="rounded-md border-blue-200 border-[1px] px-4 py-2 hover:bg-gray-700 transition-colors duration-200"
                    href="https://onebytesocial.hashnode.dev"
                >
                    Blog
                </a>
            </div>
        </div>
    );
}
