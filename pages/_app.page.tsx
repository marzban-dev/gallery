import type {AppProps} from 'next/app'
import {dehydrate, QueryClient, QueryClientProvider, Hydrate} from "@tanstack/react-query";
import {ParallaxProvider} from 'react-scroll-parallax';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {SessionProvider} from "next-auth/react";
import {Fragment, useRef} from "react";
import Head from "next/head";
import {GetStaticProps} from "next";
import 'styles/globals.css';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-creative";

function MyApp({Component, pageProps}: AppProps) {
    const queryClient = useRef(new QueryClient());
    // const router = useRouter();
    //
    // console.log(router)
    //
    // useEffect(() => {
    //     const htmlEl = document.querySelector("html") as HTMLHtmlElement;
    //     if (router.pathname === "/") htmlEl.classList.add("overflow-[hidden_!important]");
    //     else htmlEl.classList.remove("overflow-[hidden_!important]")
    // }, []);

    return (
        <Fragment>
            <Head>
                <title>Tv Show</title>
                <script src="assets/js/jquery.min.js" defer></script>
                <script src="assets/js/jquery.easings.min.js" defer></script>
                <script src="assets/js/scrolloverflow.min.js" defer></script>
                <script src="assets/js/jquery.fullpage.min.js" defer></script>
                <script src="assets/js/masonry.pkgd.min.js" defer></script>
            </Head>
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
