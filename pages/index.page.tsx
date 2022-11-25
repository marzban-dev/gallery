import type {NextPage} from 'next';
import React, {useEffect, useRef, useState} from "react";
import Header from "./components/header";
import HomeSection from "./components/home-section";
import HomeSection2 from "./components/home-section-2";
import Pagination from "pages/components/header/components/pagination";

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
