import 'styles/globals.css'
import type {AppProps} from 'next/app'
import {dehydrate, QueryClient, QueryClientProvider, Hydrate} from "@tanstack/react-query";
import {ParallaxProvider} from 'react-scroll-parallax';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {SessionProvider} from "next-auth/react";
import {Fragment, useRef} from "react";
import Head from "next/head";
import {GetStaticProps} from "next";
import Script from "next/script";

function MyApp({Component, pageProps}: AppProps) {
    const queryClient = useRef(new QueryClient());

    return (
        <Fragment>
            <Head>
                <title>Tv Show</title>
            </Head>
            <script id="jquery-cdn" src="assets/js/jquery.min.js" defer/>
            <script id="jquery-easings-cdn" src="assets/js/jquery.easings.min.js" defer/>
            <script id="scrolloverflow-cdn" src="assets/js/scrolloverflow.min.js" defer/>
            <script id="fullpage-cdn" src="assets/js/jquery.fullpage.min.js" defer/>
            <QueryClientProvider client={queryClient.current}>
                <Hydrate state={pageProps.dehydratedState}>
                    <SessionProvider session={pageProps.session}>
                        <ParallaxProvider>
                            <Component {...pageProps} />
                        </ParallaxProvider>
                    </SessionProvider>
                </Hydrate>
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </Fragment>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const queryClient = new QueryClient();

    // await queryClient.prefetchQuery();

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};


export default MyApp
