import {Html, Head, Main, NextScript} from "next/document";
import Script from "next/script";

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