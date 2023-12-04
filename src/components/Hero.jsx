import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import { discordURL } from "@/data/socials";

export default function Hero() {
    return (
        <div className="max-w-7xl p-8 w-full h-full">
            <Header />
            <div className="my-10 sm:flex sm:flex-row items-center sm:justify-between gap-20 w-full justify-center flex flex-col-reverse">
                <div className="text-gray-200 w-full sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] flex flex-col">
                    <h1 className="md:text-3xl sm:text-2xl text-3xl font-bold my-4 text-center sm:text-left">
                        A space for upskilling in collaboration.
                    </h1>
                    <h1 className="my-4 text-center sm:text-left sm:hidden md:block block italic">
                        Hop in, network with people, make new friends and
                        together, build something beautiful.
                    </h1>

                    <a
                        className="self-center sm:self-start shadow-sm px-4 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-md my-8 max-w-lg font-semibold flex items-center justify-start"
                        href={discordURL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-brands fa-discord text-xl"></i>
                        <span className="ml-3">Join Us on Discord!</span>
                    </a>
                </div>
                <div>
                    <Image
                        src="/assets/img002.png"
                        height={600}
                        width={800}
                        alt="One Byte Social Hero Image"
                        className="rounded-md border-indigo-300 border-[2px]"
                    />
                </div>
            </div>
        </div>
    );
}
