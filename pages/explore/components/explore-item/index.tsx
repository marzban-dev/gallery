import Image from "next/image";
import Image1 from "public/assets/img/image-1.jpg";
import React, {useState} from "react";
import {useRouter} from "next/router";
import {IExploreItemProps} from "./explore-item.types";
import {motion, Variants} from "framer-motion";
import classNames from "classnames";

const ExploreItem: React.FC<IExploreItemProps> = ({id, picture, selectedArt, setSelectedArt}) => {
    const router = useRouter();
    const [isAnimationStart, setIsAnimationStart] = useState(false);

    const navigateToArt = () => {
        setSelectedArt(id);
        // router.push(`/explore/${id}`, null!, {shallow: true});
    }

    const itemClasses = classNames({
        "grid-item p-3": 1,
        "z-[100]": selectedArt === id || isAnimationStart
    })

    return (
        <motion.div
            layoutId={`explore-item-container-${id}`}
            onLayoutAnimationStart={() => setIsAnimationStart(true)}
            onLayoutAnimationComplete={() => setIsAnimationStart(false)}
            className={itemClasses}
            onClick={navigateToArt}
        >
            <div className="w-full h-full rounded-[45px] overflow-hidden">
                <Image src={picture} layout="responsive"/>
            </div>
        </motion.div>
    )
}

export default ExploreItem;