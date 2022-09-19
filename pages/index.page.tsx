import type {NextPage} from 'next';
import Image1 from "public/assets/img/image-1.jpg";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import {Parallax} from 'react-scroll-parallax';
import {motion} from "framer-motion";

const Home: NextPage = () => {

    useEffect(() => {
        // const scene = document.getElementById('scene');
        // const parallaxInstance = new ParallaxMouse(scene);

        const fullPageWrappers = document.querySelectorAll(".fp-tableCell");

        fullPageWrappers.forEach(el => {
            el.setAttribute("class","fp-tableCell flex justify-end items-center")
        });

        // @ts-ignore
        $(document).ready(function() {
            // @ts-ignore
            $('#fullpage').fullpage({
                sectionSelector: '.page-section',
                scrollBar: true,
                scrollingSpeed: 1200,
                easing: 'easeInOutCubic',
            });
        });
    }, []);

    return (
        <main className="bg-[#C5BFAB] w-full" id="fullpage">
            <section className="flex justify-end items-center h-screen page-section w-full" id="1">
                <div className="h-full image-mask relative w-[710px]">
                    <Parallax translateY={[-35, 35]} className="w-full h-full">
                        <Image src={Image1} layout="fill" objectFit="cover"/>
                    </Parallax>
                </div>
            </section>
            <section className="flex justify-end items-center h-screen page-section" id="2">
                <div className="h-full image-mask relative w-[710px]">
                    <Parallax translateY={[-35, 35]} className="w-full h-full">
                        <Image src={Image1} layout="fill" objectFit="cover"/>
                    </Parallax>
                </div>
            </section>
            <section className="flex justify-end items-center h-screen page-section" id="3">
                <div className="h-full image-mask relative w-[710px]">
                    <Parallax translateY={[-35, 35]} className="w-full h-full">
                        <Image src={Image1} layout="fill" objectFit="cover"/>
                    </Parallax>
                </div>
            </section>
            <section className="flex justify-end items-center h-screen page-section" id="4">
                <div className="h-full image-mask relative w-[710px]">
                    <Parallax translateY={[-35, 35]} className="w-full h-full">
                        <Image src={Image1} layout="fill" objectFit="cover"/>
                    </Parallax>
                </div>
            </section>
            <section className="flex justify-end items-center h-screen page-section" id="5">
                <div className="h-full image-mask relative w-[710px]">
                    <Parallax translateY={[-35, 35]} className="w-full h-full">
                        <Image src={Image1} layout="fill" objectFit="cover"/>
                    </Parallax>
                </div>
            </section>
            {/*<div id="scene">*/}
            {/*    <div data-depth="0.2">My first Layer!</div>*/}
            {/*    <div data-depth="0.6">My second Layer!</div>*/}
            {/*</div>*/}
            <p>
                Lorem ipsum dolor sit amet, co
                nsectetur adipisicing elit. Accusamus aut culpa, deserunt doloribus illum mollitia
                quos vitae! Ab animi consequ
                untur cum dolorem explicabo id iste nobis odio, repellendus, voluptas, voluptatibus.
                Lorem ipsum dolor sit amet, co
                nsectetur adipisicing elit. Accusamus aut culpa, deserunt doloribus illum mollitia
                quos vitae! Ab animi consequ
                untur cum dolorem explicabo id iste nobis odio, repellendus, voluptas, voluptatibus.
                Lorem ipsum dolor sit amet, co
                nsectetur adipisicing elit. Accusamus aut culpa, deserunt doloribus illum mollitia
                quos vitae! Ab animi consequ
                untur cum dolorem explicabo id iste nobis odio, repellendus, voluptas, voluptatibus.
                Lorem ipsum dolor sit amet, co
                nsectetur adipisicing elit. Accusamus aut culpa, deserunt doloribus illum mollitia
                quos vitae! Ab animi consequ
                untur cum dolorem explicabo id iste nobis odio, repellendus, voluptas, voluptatibus.
                Lorem ipsum dolor sit amet, co
                nsectetur adipisicing elit. Accusamus aut culpa, deserunt doloribus illum mollitia
                quos vitae! Ab animi consequ
                untur cum dolorem explicabo id iste nobis odio, repellendus, voluptas, voluptatibus. Lorem ipsum dolor sit amet, co
                nsectetur adipisicing elit. Accusamus aut culpa, deserunt doloribus illum mollitia
                quos vitae! Ab animi consequ
                untur cum dolorem explicabo id iste nobis odio, repellendus, voluptas, voluptatibus. Lorem ipsum dolor sit amet, co
                nsectetur adipisicing elit. Accusamus aut culpa, deserunt doloribus illum mollitia
                quos vitae! Ab animi consequ
                untur cum dolorem explicabo id iste nobis odio, repellendus, voluptas, voluptatibus. Lorem ipsum dolor sit amet, co
                nsectetur adipisicing elit. Accusamus aut culpa, deserunt doloribus illum mollitia
                quos vitae! Ab animi consequ
                untur cum dolorem explicabo id iste nobis odio, repellendus, voluptas, voluptatibus.
                Lorem ipsum dolor sit amet, co
                nsectetur adipisicing elit. Accusamus aut culpa, deserunt doloribus illum mollitia
                quos vitae! Ab animi consequ
                untur cum dolorem explicabo id iste nobis odio, repellendus, voluptas, voluptatibus. Lorem ipsum dolor sit amet, co
                nsectetur adipisicing elit. Accusamus aut culpa, deserunt doloribus illum mollitia
                quos vitae! Ab animi consequ
                untur cum dolorem explicabo id iste nobis odio, repellendus, voluptas, voluptatibus. Lorem ipsum dolor sit amet, co
                nsectetur adipisicing elit. Accusamus aut culpa, deserunt doloribus illum mollitia
                quos vitae! Ab animi consequ
                untur cum dolorem explicabo id iste nobis odio, repellendus, voluptas, voluptatibus. Lorem ipsum dolor sit amet, co
                nsectetur adipisicing elit. Accusamus aut culpa, deserunt doloribus illum mollitia
                quos vitae! Ab animi consequ
                untur cum dolorem explicabo id iste nobis odio, repellendus, voluptas, voluptatibus. Lorem ipsum dolor sit amet, co
                nsectetur adipisicing elit. Accusamus aut culpa, deserunt doloribus illum mollitia
                quos vitae! Ab animi consequ
                untur cum dolorem explicabo id iste nobis odio, repellendus, voluptas, voluptatibus. Lorem ipsum dolor sit amet, co
                nsectetur adipisicing elit. Accusamus aut culpa, deserunt doloribus illum mollitia
                quos vitae! Ab animi consequ
                untur cum dolorem explicabo id iste nobis odio, repellendus, voluptas, voluptatibus. Lorem ipsum dolor sit amet, co
                nsectetur adipisicing elit. Accusamus aut culpa, deserunt doloribus illum mollitia
                quos vitae! Ab animi consequ
                untur cum dolorem explicabo id iste nobis odio, repellendus, voluptas, voluptatibus.
            </p>
        </main>
    )
}

export default Home;
