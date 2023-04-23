import React from "react";
import { socials } from "@/data/socials";

export default function Footer() {
    return (
        <div className="max-w-7xl p-2 w-full h-full text-white">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center my-2">
                    <a
                        href={socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-twitter text-2xl my-1 mx-3"></i>
                    </a>
                    <a
                        href={socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-instagram text-2xl my-1 mx-3"></i>
                    </a>
                    <a
                        href={socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin text-2xl my-1 mx-3"></i>
                    </a>
                    <a
                        href={socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github text-2xl my-1 mx-3"></i>
                    </a>
                </div>
                <h1 className="my-2 font-light">
                    Developed by One Byte Social &copy;{" "}
                    {new Date().getFullYear()}
                </h1>
            </div>
        </div>
    );
}
