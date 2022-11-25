import {Html, Head, Main, NextScript} from "next/document";
import {useRouter} from "next/router";
import classNames from "classnames";

export default function Document() {

    return (
        <Html className="font-lato">
            <Head>
                <title>Gallery</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Italiana&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
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