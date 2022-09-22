import React, {useState} from "react";
import {Parallax} from "react-scroll-parallax";
import Image from "next/image";
import Image1 from "public/assets/img/image-1.jpg";
import {motion, Variants} from "framer-motion";
import Image8 from "public/assets/img/image-8.jpg";

const Header: React.FC = () => {

    const maskVariants: Variants = {
        hide: {
            opacity: 0,
            x: 100
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.1,
            }
        }
    }

    const titleContainerVariants: Variants = {
        hide: {
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        },
        show: {
            transition: {
                staggerChildren: 0.1,
                staggerDirection: 1,
                // delayChildren: 0.1
            }
        }
    }

    const titleVariants: Variants = {
        hide: {
            opacity: 0,
            x: -25,
        },
        show: {
            opacity: 1,
            x: 1,
            transition: {
                duration: 1
            }
        }
    }

    const imageVariants: Variants = {
        hide: {
            opacity: 0,
            x: 20
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.3
            }
        }
    }

    return (
        <header className="page-section w-full relative" id="header-section">
            <Parallax opacity={[5, -2]}>
                <motion.h1
                    variants={titleContainerVariants}
                    initial="hide"
                    animate="show"
                    className="font-italiana text-black text-[70px] ml-[120px] mt-[70px]"
                >
                    <motion.div variants={titleVariants}>
                        MINIMALIST
                    </motion.div>

                    <motion.div variants={titleVariants} className="text-[#804533]">
                        STRING
                    </motion.div>

                    <motion.div variants={titleVariants}>
                        FOR LOREM
                    </motion.div>

                    <motion.div variants={titleVariants}>
                        COLLECTION
                    </motion.div>

                    <motion.div variants={titleVariants}>
                        DOL.
                    </motion.div>
                </motion.h1>
            </Parallax>

            <motion.div
                variants={maskVariants}
                initial="hide"
                animate="show"
                className="h-full image-mask relative w-[710px]"
            >
                <motion.div
                    variants={imageVariants}
                    initial="hide"
                    animate="show"
                    className="w-full h-full"
                >
                    <Parallax translateY={[-35, 35]} className="w-full h-full">
                        <Image src={Image1} layout="fill" objectFit="cover"/>
                    </Parallax>
                </motion.div>
            </motion.div>
        </header>
    )
}

export default Header;