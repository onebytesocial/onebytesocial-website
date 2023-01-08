import Head from "next/head";

export default function Layout({ title, children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="One Byte Social - Official Website"
                />
                <meta
                    name="keywords"
                    content="One Byte Social, One Byte, Sreekesh, Community, Tech Community, Tech"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>{children}</main>
        </>
    );
}
