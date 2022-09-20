import React, {useState} from "react";
import {AnimatePresence, motion, Variants} from "framer-motion";
import {IPaginationProps} from "./pagination.types";

const Pagination: React.FC<IPaginationProps> = ({activeSection}) => {

    const symbolVariants: Variants = {
        init: {
            x: -10,
            opacity: 0
        },
        exit: {
            x: 10,
            opacity: 0,
            transition : {
                x : {
                    duration : 0.2,
                },
                opacity : {
                    duration : 0.15
                }
            }
        },
        enter: {
            x: 0,
            opacity: 1,
            transition : {
                x : {
                    duration : 0.15,
                },
                opacity : {
                    duration : 0.2
                }
            }
        }
    }

    return (
        <div className="fixed left-[40px] top-0 h-screen flex flex-col justify-center items-center">
            <div className="font-italiana text-[25px] rotate-90 [line-height:1] text-center mb-[5px]">I</div>
            <div className="w-[3px] h-[25vh] bg-black flex justify-center items-center"/>
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    variants={symbolVariants}
                    key={activeSection}
                    initial="init"
                    animate="enter"
                    exit="exit"
                    className="font-italiana text-[25px] [line-height:1] text-center"
                >
                   <span className="block rotate-90">
                        {activeSection}
                   </span>
                </motion.div>
            </AnimatePresence>
            <div className="w-[3px] h-[25vh] bg-black flex justify-center items-center"/>
            <div className="font-italiana text-[25px] rotate-90 [line-height:1] text-center mt-[16px]">VII</div>
        </div>
    );
}

export default Pagination;