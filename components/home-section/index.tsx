import React, {useEffect} from "react";
import {Parallax} from "react-scroll-parallax";
import Image from "next/image";
import Image1 from "public/assets/img/image-1.jpg";

const HomeSection: React.FC = () => {

    return (
        <section className="h-screen page-section w-full">
            <div className="h-full image-mask relative w-[710px]">
                <Parallax translateY={[-35, 35]} className="w-full h-full">
                    <Image src={Image1} layout="fill" objectFit="cover"/>
                </Parallax>
            </div>
        </section>
    )
}

export default HomeSection;