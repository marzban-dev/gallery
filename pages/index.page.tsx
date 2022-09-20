import type {NextPage} from 'next';
import Image1 from "public/assets/img/image-1.jpg";
import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";
import {Parallax} from 'react-scroll-parallax';
// import Fullpage, {FullPageSections, FullpageSection} from '@ap.cx/react-fullpage';
import {motion} from "framer-motion"
import {Header} from "./components";
import Pagination from "pages/components/header/components/pagination";

const Home: NextPage = () => {
    const [activeSection, setActiveSection] = useState("I");
    const symbols = ["I","II","III","IV","V","VI"];

    useEffect(() => {
        // const scene = document.getElementById('scene');
        // const parallaxInstance = new ParallaxMouse(scene);
        //

        // @ts-ignore
        $(document).ready(function () {
            // @ts-ignore
            $('#fullpage').fullpage({
                scrollBar: true,
                sectionSelector: '.page-section-header',
                scrollingSpeed: 1200,
                // @ts-ignore
                afterLoad: function (anchorLink, index) {
                    setActiveSection(symbols[index - 1])
                },
            });
        });
    }, []);

    return (
        <main className="bg-[#C5BFAB] w-full" id="fullpage">

            <Pagination activeSection={activeSection}/>

            <Header/>
            <Header/>
            <Header/>

            {/*<div id="scene">*/}
            {/*    <div data-depth="0.2">My first Layer!</div>*/}
            {/*    <div data-depth="0.6">My second Layer!</div>*/}
            {/*</div>*/}
        </main>
    )
}

export default Home;
