import type {NextPage} from 'next';
import React, {useEffect, useRef, useState} from "react";
import {Parallax} from 'react-scroll-parallax';
import {Header, HomeSection, HomeSection2} from "./components";
import Pagination from "pages/components/header/components/pagination";
import Image from "next/image";
import Image8 from "public/assets/img/image-8.jpg";

const Home: NextPage = () => {
    const [activeSection, setActiveSection] = useState(1);

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
                // @ts-ignore
                onLeave: function (index, nextIndex, direction) {
                    setActiveSection(nextIndex)
                },
            });
        });
    }, []);

    return (
        <main className="bg-[#C5BFAB] w-full" id="fullpage">
            <Pagination activeSection={activeSection}/>
            <Header/>
            <HomeSection activeSection={activeSection}/>
            <HomeSection2 activeSection={activeSection}/>
        </main>
    )
}

export default Home;
