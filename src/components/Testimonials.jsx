import React, { useState, useRef } from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
    const [tests, setTests] = useState(testimonials.slice(0, 3));
    const [buttonPrompt, setButtonPrompt] = useState("Show More");

    const testimonialsRef = useRef(null);
    return (
        <div className="bg-[rgb(440,440,455)] w-full flex flex-col items-center justify-center">
            <div className="max-w-7xl p-8 w-full h-full">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className="text-4xl font-bold my-4">Testimonials</h1>
                    <div>
                        <div className="grid my-4 lg:my-6 lg:grid-cols-3">
                            {tests.map((testimonial) => (
                                <figure
                                    className="flex flex-col justify-center items-center p-8 text-center border-b md:p-12 lg:border-r border-l border-t min-h-[380px]"
                                    key={tests.indexOf(testimonial)}
                                >
                                    <blockquote className="mx-auto mb-8 max-w-2xl">
                                        <p className="my-4 text-zinc-900 text-[0.9rem] display-linebreak text-left">
                                            {testimonial.feedback}
                                        </p>
                                    </blockquote>
                                    <figcaption className="flex justify-center items-center space-x-3">
                                        <Image
                                            className="rounded-full"
                                            width={80}
                                            height={80}
                                            src={testimonial.image}
                                            alt="profile picture"
                                        />
                                        <div className="space-y-0.5 font-medium text-left">
                                            <div>{testimonial.name}</div>
                                            <div className="text-sm font-light">
                                                {testimonial.role}
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                    <div id="#testimonials" ref={testimonialsRef}></div>
                    <button
                        className="px-3 py-2 rounded-md bg-slate-100 border-2 border-indigo-100 hover:bg-slate-200"
                        onClick={() => {
                            if (buttonPrompt === "Show More") {
                                setTests(testimonials);
                                setButtonPrompt("Show Less");
                            } else {
                                setTests(testimonials.slice(0, 3));
                                setButtonPrompt("Show More");
                            }
                            testimonialsRef.current.scrollIntoView({
                                block: "start",
                                behavior: "smooth",
                            });
                        }}
                    >
                        {buttonPrompt}
                    </button>
                    {/* <hr className="h-px w-1/2 my-8 bg-gray-200 border-0" /> */}
                </div>
                {/* Partner with us! */}
            </div>
            {/* <div className="max-w-7xl p-8 w-full h-full">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className="text-4xl font-bold mb-4">
                        Partner with Us!
                    </h1>

                    <h1 className="font-light">
                        We are open to partnering with organizations and fellow
                        communities to conduct talks, events, conferences,
                        hackathons, etc.{" "}
                    </h1>
                </div>
            </div> */}
        </div>
    );
}
