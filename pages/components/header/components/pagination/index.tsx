import React, {useState} from "react";
import {AnimatePresence, motion, Variants} from "framer-motion";
import {IPaginationProps} from "./pagination.types";

const Pagination: React.FC<IPaginationProps> = ({activeSection}) => {
    const symbols = ["I", "II", "III", "IV", "V", "VI"];

    const symbolVariants: Variants = {
        init: {
            y: 10,
            opacity: 0
        },
        exit: {
            y: -10,
            opacity: 0,
            transition: {
                y: {
                    duration: 0.2,
                },
                opacity: {
                    duration: 0.15
                }
            }
        },
        enter: {
            y: 0,
            opacity: 1,
            transition: {
                y: {
                    duration: 0.15,
                },
                opacity: {
                    duration: 0.2
                }
            }
        }
    }

    return (
        <div className="fixed z-[10] bottom-[20px] mx-auto w-full flex justify-center items-center">
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    variants={symbolVariants}
                    key={activeSection}
                    initial="init"
                    animate="enter"
                    exit="exit"
                    className="font-italiana text-[35px] [line-height:1] text-center"
                >
                    {symbols[activeSection - 1]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default Pagination;