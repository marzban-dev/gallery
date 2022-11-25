import React from "react";
import {AnimatePresence, motion, MotionStyle, useScroll, useSpring, useTransform, Variants} from "framer-motion";
import Image from "next/image";
import {IBackgroundParallaxProps} from "./background-parallax.types";

const BackgroundParallax: React.FC<IBackgroundParallaxProps> = ({activeSlideContent}) => {
    const {scrollYProgress} = useScroll();
    const transformedValue = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const springValue = useSpring(transformedValue, {
        stiffness: 100,
        damping: 40,
        restDelta: 0.001
    });

    const backgroundVariants: Variants = {
        exit: {
            scale: 1.05,
            opacity : 0,
            transition: {
                delay : 0.5,
                duration: 0.5
            }
        },
        hide: {
            scale: 0.95,
            opacity : 0,
        },
        show: {
            scale: 1,
            opacity : 1,
            transition: {
                delay : 0.5,
                duration: 0.5
            }
        }
    }

    const backgroundStyles: MotionStyle = {
        y: springValue
    }

    return (
        <div className="fixed bg-[#1C1C1CFF] h-[120vh] w-full">
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                    key={activeSlideContent.id}
                    variants={backgroundVariants}
                    initial="hide"
                    exit="exit"
                    animate="show"
                    style={backgroundStyles}
                    className="w-full h-full"
                >
                    <Image src={activeSlideContent.picture} layout="fill" objectFit="cover" className="opacity-[0.08]"/>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default BackgroundParallax;