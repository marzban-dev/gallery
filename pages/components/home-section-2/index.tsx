import React from "react";
import {motion, Variants} from "framer-motion";
import {Parallax} from "react-scroll-parallax";
import Image from "next/image";
import CloudImage1 from "public/assets/img/cloud-1.png";
import CloudImage2 from "public/assets/img/cloud-2.png";
import Artist1 from "public/assets/img/artist-1.jpg";
import Artist2 from "public/assets/img/artist-2.jpg";

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
            y: 300,
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
            y: 300,
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
            <div className="w-full flex justify-start items-start relative">
                <motion.div
                    variants={imageTopVariants}
                    initial="hide"
                    animate={activeSection === 3 ? "show" : "hide"}
                    className="w-[1000px] overflow-visible absolute"
                >
                    <Parallax translateY={[-35, 35]} className="w-full h-full">
                        <Image src={CloudImage1} layout="responsive"/>
                    </Parallax>
                </motion.div>
                <div>
                    <Parallax translateX={[-45, 35]} opacity={[0,4]} className="relative">
                        <div className="w-[210px] h-[360px] rounded-[120px] bg-black shadow-[0_8px_30px_1px_rgba(0,0,0,0.5)] relative overflow-hidden left-[100px] top-[50px]">
                            <Image src={Artist1} layout="fill" objectFit="cover"/>
                        </div>
                        <Parallax translateX={[-35, 35]} className="flex flex-col justify-start items-center font-bodoni text-[50px] font-medium text-white drop-shadow-[0_5px_6px_rgba(0,0,0,0.2)] [line-height:1.2] absolute bottom-[-80px] left-[200px]">
                            <span>Leonardo</span>
                            <span className="pl-[10px]">Davinci</span>
                        </Parallax>
                    </Parallax>
                </div>
            </div>


            <div className="w-full flex justify-end items-end relative">
                <motion.div
                    variants={imageBottomVariants}
                    initial="hide"
                    animate={activeSection === 3 ? "show" : "hide"}
                    className="w-[1000px] overflow-visible absolute bottom-0"
                >
                    <Parallax translateY={[-35, 35]} className="w-full h-full">
                        <Image src={CloudImage2} layout="responsive"/>
                    </Parallax>
                </motion.div>
                <div>
                    <Parallax translateX={[35, -45]} opacity={[0,4]} className="relative">
                        <div className="w-[210px] h-[360px] rounded-[120px] bg-black shadow-[0_8px_30px_1px_rgba(0,0,0,0.5)] relative overflow-hidden right-[150px] bottom-[70px]">
                            <Image src={Artist1} layout="fill" objectFit="cover"/>
                        </div>
                        <Parallax translateX={[35, -35]} className="flex flex-col justify-start items-center font-bodoni text-[50px] font-medium text-white drop-shadow-[0_5px_6px_rgba(0,0,0,0.2)] [line-height:1.2] absolute bottom-[40px] right-[300px]">
                            <span>Leonardo</span>
                            <span className="pl-[10px]">Davinci</span>
                        </Parallax>
                    </Parallax>
                </div>
            </div>
        </section>
    )
}

export default HomeSection2;