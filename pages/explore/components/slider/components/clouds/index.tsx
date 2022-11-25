import React, {Fragment, useEffect, useRef} from "react";
import {AnimatePresence, motion, MotionStyle, useScroll, useSpring, useTransform, Variants} from "framer-motion";
import {Parallax} from "react-scroll-parallax";
import Image from "next/image";
import Cloud2 from "public/assets/img/cloud-white-2.png";
import Cloud1 from "public/assets/img/cloud-white-1.png";
import Cloud3 from "public/assets/img/cloud-white-3.png";
import {ICloudsProps} from "./clouds.types";

const Clouds: React.FC<ICloudsProps> = ({title, description, activeSlideId, slideHover}) => {
    const {scrollYProgress} = useScroll();
    const transformedValue = useTransform(scrollYProgress, [0, 1], [35, -35]);
    const springValue = useSpring(transformedValue, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const backgroundVariants: Variants = {
        exit: {
            scale: 1.05,
            opacity: 0,
            transition: {
                delay: 0.5,
                duration: 0.5
            }
        },
        hide: {
            scale: 0.95,
            opacity: 0,
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 0.5
            }
        }
    }

    const backgroundStyles: MotionStyle = {
        y: springValue
    }

    const titleVariants: Variants = {
        show: {
            x: activeSlideId * -30,
            transition: {
                duration: 1.2
            }
        }
    }
    const titleStyles: MotionStyle = {
        y: springValue,
    }

    const cloud2Variants: Variants = {
        show: {
            x: activeSlideId * -40,
            transition: {
                duration: 1.2
            }
        }
    }
    const cloud2Styles: MotionStyle = {
        y: springValue,
    }

    const textVariants: Variants = {
        show: {
            x: activeSlideId * -15,
            transition: {
                duration: 1.2
            }
        }
    }

    const titleChangesVariants: Variants = {
        init: {
            opacity: 0
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.4
            }
        },
        enter: {
            opacity: 1,
            transition: {
                duration: 0.4
            }
        }
    }

    return (
        <Fragment>
            <motion.div style={cloud2Styles} variants={cloud2Variants} initial={false} animate="show" className="w-[700px] absolute bottom-[-230px] right-[-250px] z-[100]">
                <Image src={Cloud2} layout="responsive"/>
            </motion.div>

            <motion.div style={cloud2Styles} variants={cloud2Variants} initial={false} animate="show" className="w-[650px] absolute bottom-[100px] left-[-250px] z-[100]">
                <Image src={Cloud1} layout="responsive"/>
            </motion.div>

            <motion.div style={titleStyles} variants={titleVariants} initial={false} animate="show" className="w-[400px] absolute top-[20px] left-[calc(50%_-_350px)] z-[100]">
                <Image src={Cloud3} layout="responsive"/>
                <AnimatePresence mode="wait" initial={false}>
                    <motion.h2
                        variants={titleChangesVariants}
                        key={activeSlideId}
                        initial="init"
                        animate="enter"
                        exit="exit"
                        className="text-[#E7E7E7] text-[50px] absolute bottom-[calc(50%_-_50px)] w-full pl-[100px] font-bodoni [line-height:1.3]"
                    >
                        {title}
                    </motion.h2>
                </AnimatePresence>
            </motion.div>

            <motion.div variants={textVariants} initial={false} animate="show" className="w-[400px] absolute bottom-[40px] left-[calc(50%_-_190px)] z-[100]">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.p
                        variants={titleChangesVariants}
                        key={activeSlideId}
                        initial="init"
                        animate="enter"
                        exit="exit"
                        className="text-[#ABABAB] text-[25px] font-bodoni italic [line-height:1.3]"
                    >
                        {description}
                    </motion.p>
                </AnimatePresence>
            </motion.div>
        </Fragment>
    )
};

export default Clouds;