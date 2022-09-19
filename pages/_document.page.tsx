import {Html, Head, Main, NextScript} from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html className="font-lato">
            <Head>
                <title>Gallery</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/jquery.fullpage.min.css"
                      integrity="sha512-q54FvbV+gGBn+NvgaD4gpJ7w4wrO00DgW7Rx503PIhrf0CuMwLOwbS+bXgOBFSob+6GVy1HDPfaRLJ8w2jiS4g==" crossOrigin="anonymous" referrerPolicy="no-referrer"/>
            </Head>
            <body>
            <div id="portal-container"></div>
            <Main/>
            <NextScript/>
            <Script strategy="beforeInteractive" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" />
            <Script strategy="beforeInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/vendors/jquery.easings.min.js"
                    integrity="sha512-rXZZDfRSa6rsBuT78nRTbh1ccwpXhTCspKUDqox3hUQNYdjB6KB6mSj6mXcB9/5F5wODAJnkztXPxzkTalp11w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <Script strategy="beforeInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/vendors/scrolloverflow.min.js"
                    integrity="sha512-FzESM/E7XJBqcJyrXa08gRcpp5rDHO661C0L3vH4NsZfUWUsjN4+t6Lg8h+e8TMR2aYijIrcT+CPGq7tSugRzA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <Script strategy="beforeInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/jquery.fullpage.min.js"
                    integrity="sha512-bxzECOBohzcTcWocMAlNDE2kYs0QgwGs4eD8TlAN2vfovq13kfDfp95sJSZrNpt0VMkpP93ZxLC/+WN/7Trw2g=="
                    crossOrigin="anonymous" referrerPolicy="no-referrer"/>
            </body>
        </Html>
    );
}