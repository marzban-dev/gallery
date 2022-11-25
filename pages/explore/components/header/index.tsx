import React from "react";
import Image from "next/image";
import Image9 from "public/assets/img/image-9.jpg";
import DiscoverCloud from "public/assets/img/discover-cloud.png";

const Header: React.FC = () => {
    return (
        <div className="page-section">
            <section className="h-screen w-full relative snap-center">
                {/*<Image src={Image9} layout="fill" objectFit="cover" className="opacity-[0.3]"/>*/}
                {/*<div className="w-full h-full bg-[rgba(18,18,18,0.3)] absolute"></div>*/}
                <div className="flex justify-center items-center w-full h-full">
                    <h1 className="text-white font-italiana text-[100px]  drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                        Discover
                    </h1>
                </div>
            </section>
        </div>
    )
}

export default Header;