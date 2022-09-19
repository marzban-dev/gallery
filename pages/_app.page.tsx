import 'styles/globals.css'
import type {AppProps} from 'next/app'
import {dehydrate,QueryClient, QueryClientProvider, Hydrate} from "@tanstack/react-query";
import {ParallaxProvider} from 'react-scroll-parallax';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {SessionProvider} from "next-auth/react";
import {Fragment, useRef} from "react";
import Head from "next/head";
import {GetStaticProps} from "next";

function MyApp({Component, pageProps}: AppProps) {
    const queryClient = useRef(new QueryClient());

    return (
        <Fragment>
            <Head>
                <title>Tv Show</title>
            </Head>
            <QueryClientProvider client={queryClient.current}>
                {/* @ts-ignore */}
                <Hydrate state={pageProps.dehydratedState}>
                    {/* @ts-ignore */}
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
