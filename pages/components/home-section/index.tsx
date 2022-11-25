import React from "react";
import {motion, Variants} from "framer-motion";
import {Parallax} from "react-scroll-parallax";
import Image from "next/image";
import Image2 from "public/assets/img/image-2.jpg";
import Image3 from "public/assets/img/image-4.jpg";
import Image8 from "public/assets/img/image-8.jpg";

const HomeSection: React.FC<{ activeSection: number }> = ({activeSection}) => {

    const imageTopVariants: Variants = {
        hide: {
            opacity: 0,
            x: -200,
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
            x: 0,
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
            x: 200,
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
            x: 0,
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

    const textVariants: Variants = {
        hide: {
            opacity: 0,
            transition: {
                duration: 0.9
            }
        },
        show: {
            opacity: 1,
            transition: {
                duration: 0.9
            }
        }
    }

    return (
        <section className="page-section relative h-screen" id="home-section">
            <div className="w-full flex justify-start items-start relative">
                <motion.div
                    variants={imageTopVariants}
                    initial="hide"
                    animate={activeSection === 2 ? "show" : "hide"}
                    className="image-mask-2 absolute w-[650px] h-screen top-[-300px]"
                >
                    <Parallax translateY={[-35, 35]} className="w-full h-full">
                        <Image src={Image2} layout="fill" objectFit="cover"/>
                    </Parallax>
                </motion.div>
                <motion.div
                    variants={textVariants}
                    initial="hide"
                    animate={activeSection === 2 ? "show" : "hide"}
                    className="flex justify-end items-center w-full absolute top-[70px] right-[150px]"
                >
                    <p className="font-italiana text-[50px]">
                        MINIMALIST<br/>
                        <span className="text-[#804533]">STRONG</span> FOR LOREM<br/>
                        COLLECTION DOL<br/>
                    </p>
                </motion.div>
            </div>


            <div className="w-full flex justify-end items-end relative">
                <motion.div
                    variants={textVariants}
                    initial="hide"
                    animate={activeSection === 2 ? "show" : "hide"}
                    className="flex justify-start items-center absolute bottom-[70px] w-full left-[150px]"
                >
                    <p className="font-italiana text-[24px] font-bodoni italic text-[#3C3C3C]">
                        I present three versions of the website<br/>
                        concept for the mobile version related to<br/>
                        the science and history of painting and<br/>
                        artistic photography.
                    </p>
                </motion.div>
                <motion.div
                    variants={imageBottomVariants}
                    initial="hide"
                    animate={activeSection === 2 ? "show" : "hide"}
                    className="image-mask-3 absolute w-[650px] h-screen bottom-[-350px]"
                >
                    <Parallax translateY={[-35, 35]} opacity={[-1, 5]} className="w-full h-full">
                        <Image src={Image3} layout="fill" objectFit="cover"/>
                    </Parallax>
                </motion.div>
            </div>
        </section>
    )
}

export default HomeSection;