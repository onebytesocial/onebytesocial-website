import React from "react";
import Head from "next/head";
import { content, keywords, og_title, author } from "@/helpers/seo";

export default function Layout({ title, children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={content} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta property="og:title" content={og_title} />
                <meta property="og:description" content={content} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col items-center justify-center  bg-zinc-900 w-full h-full font-Montserrat">
                {children}
            </div>
        </>
    );
}
