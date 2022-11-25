import React, {Fragment, useState} from "react";
import Image from "next/image";
import Ellipse from "public/assets/img/ellipses.png";
import SliderBg from "public/assets/img/explore-slider-bg.jpg";
import Image1 from "public/assets/img/image-2.jpg";
import SwiperSlider from "./components/swiper-slider";
import Clouds from "./components/clouds";
import {ISliderProps} from "./slider.types";

const Slider: React.FC<ISliderProps> = ({activeSlideContent, setActiveSlideContent, slides}) => {

    const [slideHover, setSlideHover] = useState(false);
    const [activeSlideId, setActiveSlideId] = useState(1);

    return (
        <div className="page-section">
            <section className="h-screen w-full relative flex justify-center items-center">
                {/*<Image src={Ellipse} layout="responsive"/>*/}
                {/*<Image src={SliderBg} layout="fill" objectFit="cover" objectPosition="bottom" className="opacity-[0.1]"/>*/}

                <Clouds
                    title={activeSlideContent.title}
                    description={activeSlideContent.description}
                    activeSlideId={activeSlideId}
                    slideHover={slideHover}
                />

                <SwiperSlider
                    slides={slides}
                    setActiveSlideId={setActiveSlideId}
                    setActiveSlideContent={setActiveSlideContent}
                    activeSlideId={activeSlideId}
                    setSlideHover={setSlideHover}
                    slideHover={slideHover}
                />

            </section>
        </div>
    )
}

export default Slider;