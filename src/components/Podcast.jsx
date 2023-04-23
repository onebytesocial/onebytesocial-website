import React from "react";
import Image from "next/image";
import { podcastURLs } from "@/data/socials";

export default function Podcast() {
    return (
        <div className="max-w-7xl p-8 w-full h-full text-white">
            <div className="my-10 sm:flex sm:flex-row items-center sm:justify-between gap-20 w-full justify-center flex flex-col">
                <div>
                    <Image
                        src="/assets/img003.jpg"
                        height={300}
                        width={450}
                        alt="A Podcast Microphone Image"
                        className="rounded-md border-indigo-200 border-[2px] md:h-[440px] md:w-[350px] lg:h-[500px] lg:w-[400px]"
                    />
                </div>
                <div className="text-gray-200 w-full h-full sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] self-center flex flex-col justify-center items-stretch sm:justify-self-start">
                    <h1 className="md:text-4xl sm:text-3xl text-4xl font-bold my-4 text-center sm:text-left">
                        Our Podcast
                    </h1>

                    <h1 className="my-4 text-center sm:text-left italic">
                        Bringing to you the special conversations, insightful
                        stories and the experiences of successful people in tech
                        in our podcasting platform -{" "}
                        <span className="font-semibold text-xl">
                            The One Byte Show
                        </span>
                    </h1>

                    <h1 className="my-4 text-center sm:text-left text-xl">
                        Follow Us!
                    </h1>

                    <a
                        className="self-center sm:self-start shadow-sm px-4 py-3 bg-gradient-to-r from-green-600 to-green-500 rounded-md my-2 w-full font-semibold flex items-center justify-start"
                        href={podcastURLs.spotify}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-brands fa-spotify text-xl"></i>
                        <span className="ml-3">Spotify</span>
                    </a>
                    <a
                        className="self-center sm:self-start shadow-sm px-4 py-3 bg-gradient-to-r from-slate-600 to-slate-500 rounded-md my-2 w-full font-semibold flex items-center justify-start"
                        href={podcastURLs.google}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-brands fa-google text-xl"></i>
                        <span className="ml-3">Google Podcasts</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
