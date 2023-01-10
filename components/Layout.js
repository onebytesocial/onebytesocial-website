import Head from "next/head";
import NavBar from "./NavBar";

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
                <link rel="icon" href="/1_BYTE_1.ico" />
            </Head>
			<NavBar />
            <main>{children}</main>
        </>
    );
}
