import React, {Fragment} from "react";
import {ISelectedArtProps} from "./selected-art.types";
import {motion} from "framer-motion";
import Image from "next/image";
import TestImage from "public/assets/img/image-5.jpg";
import {useArt} from "hooks/useExplore";

const SelectedArt: React.FC<ISelectedArtProps> = ({selectedArt, setSelectedArt}) => {
    const {data : art} = useArt(selectedArt!);

    return (
        <Fragment>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0, transition: {duration: 0.15}}}
                transition={{duration: 0.2, delay: 0.15}}
                className="fixed z-[200] w-full h-full top-0 left-0 bg-[rgba(17,17,17,0.9)] flex justify-center items-center"
                onClick={() => setSelectedArt(null)}
            >
                <motion.div
                    className="fixed z-[100] w-[400px] overflow-hidden rounded-[30px]"
                    layoutId={`explore-item-container-${selectedArt}`}
                >
                    <Image src={art.picture} layout="responsive" />
                </motion.div>
            </motion.div>
        </Fragment>
    )
}

export default SelectedArt;