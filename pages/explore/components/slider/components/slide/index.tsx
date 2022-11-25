import React from "react";
import Image from "next/image";
import Frame2 from "public/assets/img/frame-2.png";
import {ISlideProps} from "./slide.types";
import {motion, MotionStyle, Variants} from "framer-motion";
import classNames from "classnames";
import {useRouter} from "next/router";

const Slide: React.FC<ISlideProps> = ({id, picture, activeSlide, setSlideHover, slideHover}) => {
    const isActive = id === activeSlide;

    const variants: Variants = {
        hide: {
            opacity: 0,
            x: 500,
            transition: {
                ease: "easeOut",
                duration: 1.2
            }
        },
        show: {
            opacity: 1,
            scale: isActive && slideHover ? 1.07 : 1,
            x: 0,
            transition: {
                ease: "easeOut",
                duration: 1.2,
                scale: {
                    duration: 0.15
                }
            }
        }
    }

    return (
        <motion.div
            variants={variants}
            initial={false}
            animate={id - 1 > activeSlide ? "hide" : "show"}
            className="flex justify-center items-center h-full relative shadow-[0_20px_50px_1px_rgba(0,0,0,0.7)] w-[350px]"
            onMouseEnter={() => isActive ? setSlideHover!(true) : null}
            onMouseLeave={() => isActive ? setSlideHover!(false) : null}
        >
            <Image
                src={picture}
                placeholder="blur"
                layout="fill"
                objectFit="cover"
                className="drop-shadow-[2px_4px_6px_black_!important]"
            />
            <Image src={Frame2} priority/>
        </motion.div>
    )
}

export default React.memo(Slide);