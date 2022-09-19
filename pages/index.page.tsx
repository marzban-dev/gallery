import type {NextPage} from 'next';
import Image1 from "public/assets/img/image-1.jpg";
import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";
import {Parallax} from 'react-scroll-parallax';
// import Fullpage, {FullPageSections, FullpageSection} from '@ap.cx/react-fullpage';
import {motion} from "framer-motion"
import {HomeSection} from "components";

const Home: NextPage = () => {

    useEffect(() => {
        // const scene = document.getElementById('scene');
        // const parallaxInstance = new ParallaxMouse(scene);
        //

        // @ts-ignore
        $(document).ready(function () {
            // @ts-ignore
            $('#fullpage').fullpage({
                scrollBar: true,
                sectionSelector: '.page-section',
                scrollingSpeed: 1200,
                afterLoad : function () {
                    // @ts-ignore
                    let loadedSection = $(this);
                    console.log(loadedSection)
                    // const fullPageWrappers = document.querySelectorAll(".fp-tableCell");
                    //
                    // fullPageWrappers.forEach(el => {
                    //     el.setAttribute("class", "fp-tableCell flex justify-end items-center")
                    // });
                }
            });
        });
    }, []);

    return (
        <main className="bg-[#C5BFAB] w-full" id="fullpage">

            <HomeSection />
            <HomeSection />
            <HomeSection />
            {/*<div id="scene">*/}
            {/*    <div data-depth="0.2">My first Layer!</div>*/}
            {/*    <div data-depth="0.6">My second Layer!</div>*/}
            {/*</div>*/}
        </main>
    )
}

export default Home;
