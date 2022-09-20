import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {

    return (
        <Html className="font-lato">
            <Head>
                <title>Gallery</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="assets/css/jquery.fullpage.min.css"/>
            </Head>
            <body>
            <div id="portal-container"></div>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}