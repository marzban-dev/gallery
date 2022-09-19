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
            <script id="jquery-cdn" src="assets/js/jquery.min.js" defer/>
            <script id="jquery-easings-cdn" src="assets/js/jquery.easings.min.js" defer/>
            <script id="scrolloverflow-cdn" src="assets/js/scrolloverflow.min.js" defer/>
            <script id="fullpage-cdn" src="assets/js/jquery.fullpage.min.js" defer/>
        </Html>
    );
}