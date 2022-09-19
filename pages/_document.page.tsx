import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html className="font-lato">
            <Head>
                <title>Gallery</title>
            </Head>
            <body>
            <div id="portal-container"></div>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}