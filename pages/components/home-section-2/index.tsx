import React from "react";
import {motion, Variants} from "framer-motion";
import {Parallax} from "react-scroll-parallax";
import Image from "next/image";
import CloudImage1 from "public/assets/img/cloud-1.png";
import CloudImage2 from "public/assets/img/cloud-2.png";

const HomeSection2: React.FC<{ activeSection: number }> = ({activeSection}) => {

    const imageTopVariants: Variants = {
        hide: {
            opacity: 0,
            x: -400,
            y: -350,
            transition: {
                opacity: {
                    duration: 0.9
                },
                x: {
                    duration: 1
                }
            }
        },
        show: {
            opacity: 1,
            x: -200,
            y: -350,
            transition: {
                delay: 0.3,
                opacity: {
                    duration: 1
                },
                x: {
                    duration: 0.9
                }
            }
        }
    }

    const imageBottomVariants: Variants = {
        hide: {
            opacity: 0,
            x: 400,
            y: 150,
            transition: {
                opacity: {
                    duration: 0.9
                },
                x: {
                    duration: 1
                }
            }
        },
        show: {
            opacity: 1,
            x: 200,
            y: 150,
            transition: {
                delay: 0.3,
                opacity: {
                    duration: 1
                },
                x: {
                    duration: 0.9
                }
            }
        }
    }

    return (
        <section className="page-section relative h-screen" id="home-section-2">
            <div className="w-full flex justify-start items-start">
                <motion.div
                    variants={imageTopVariants}
                    initial="hide"
                    animate={activeSection === 3 ? "show" : "hide"}
                    className="w-[1000px] overflow-visible"
                >
                    <Parallax translateY={[-35, 35]} className="w-full h-full">
                        <Image src={CloudImage1} layout="responsive"/>
                    </Parallax>
                </motion.div>
            </div>
            <div className="w-full flex justify-end items-end">
                <motion.div
                    variants={imageBottomVariants}
                    initial="hide"
                    animate={activeSection === 3 ? "show" : "hide"}
                    className="w-[1000px] overflow-visible "
                >
                    <Parallax translateY={[-35, 35]} className="w-full h-full">
                        <Image src={CloudImage2} layout="responsive"/>
                    </Parallax>
                </motion.div>
            </div>
        </section>
    )
}

export default HomeSection2;