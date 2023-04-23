import React from "react";
import { features } from "@/data/description";

export default function Features() {
    return (
        <div className="bg-[rgb(440,440,455)] w-full flex items-center justify-center">
            <div className="max-w-7xl p-8 w-full h-full my-10">
                <div className="md:flex-row items-center justify-between gap-10 flex flex-col">
                    <div className="text-gray-700 max-w-[400px] md:text-left text-center">
                        <h1 className="text-2xl font-bold my-4">
                            Become the best version of yourself.
                        </h1>
                        <h1 className="my-4">
                            Find an environment that provides you the right
                            support throughout your journey.
                        </h1>
                    </div>
                    <div className="grid grid-cols-2 text-gray-100 gap-4 content-center">
                        {features.map((feature) => (
                            <div
                                className="bg-indigo-500 rounded-md py-4 px-3 max-w-[300px] shadow-md flex flex-col gap-4"
                                key={features.indexOf(feature)}
                            >
                                <div className="text-xl">
                                    <i className={feature.icon}></i>
                                </div>
                                <div>
                                    <h1 className="my-1 font-semibold">
                                        {feature.title}
                                    </h1>
                                    <h1 className="text-[0.9rem]">
                                        {feature.description}
                                    </h1>
                                </div>{" "}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
