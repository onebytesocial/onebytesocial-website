import React from "react";
import Image from "next/image";

export default function Founder() {
    return (
        <div className="max-w-7xl p-8 w-full h-full text-white">
            <div className="my-10 sm:flex sm:flex-row items-center sm:justify-between gap-20 w-full justify-center flex flex-col">
                <div className="text-gray-200 w-full h-full sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] self-center flex flex-col justify-center items-stretch sm:justify-self-start">
                    <h1 className="md:text-4xl sm:text-3xl text-4xl font-bold my-4 text-center sm:text-left">
                        From the Founder
                    </h1>

                    <h1 className="my-4 text-center sm:text-left italic">
                        As a developer myself, I empathize with new devs who are
                        overwhelmed with so much information when they walk into
                        the scene, at which point they&apos;re clueless as to
                        what they should be doing next. I wanted to create a
                        space where we can walk with people through these
                        experiences and not only make them stronger technically,
                        but help them build a personality that makes them ideal
                        employees for companies throughout their career.
                    </h1>

                    <h1 className="my-4 text-center sm:text-left text-xl">
                        ~ Sreekesh Iyer
                    </h1>
                </div>
                <div>
                    <Image
                        src="/assets/img004.jpg"
                        height={250}
                        width={300}
                        alt="Sreekesh"
                        className="rounded-md border-indigo-200 border-[2px] md:h-[440px] md:w-[300px] lg:h-[500px] lg:w-[350px]"
                    />
                </div>
            </div>
        </div>
    );
}
