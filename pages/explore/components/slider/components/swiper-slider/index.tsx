import React from "react";
import {SwiperProps, SwiperSlide, Swiper} from "swiper/react";
import Slide from "../slide";
import {EffectCreative, Keyboard} from "swiper";
import {ISwiperSliderProps} from "./swiper-slider.types";

const SwiperSlider: React.FC<ISwiperSliderProps> = ({setActiveSlideId, activeSlideId, setActiveSlideContent, slides, slideHover, setSlideHover}) => {

    const swiperConfig: SwiperProps = {
        grabCursor: true,
        effect: "creative",
        speed: 1200,
        slidesPerView: "auto",
        keyboard: true,
        onInit: sw => {
            // sw.slides.forEach((slide, index) => {
            //     if (index > 1) {
            //         //@ts-ignore
            //         slide.style.opacity = "0";
            //         //@ts-ignore
            //         // slide.style.transform = "translateX(50px)"
            //     }
            // })
        },
        // coverflowEffect : {
        //     rotate: 25,
        //     stretch: 0,
        //     depth: 150,
        //     modifier: 1.2,
        //     slideShadows: true,
        // }
        onSlideChange: sw => {
            setActiveSlideContent(slides[sw.activeIndex]);
            setActiveSlideId(sw.activeIndex + 1);
            // sw.slides.forEach((slide, index) => {
            //     if (index > sw.activeIndex + 1) {
            //         //@ts-ignore
            //         slide.style.opacity = "0";
            //         //@ts-ignore
            //         // slide.style.transform = "translateX(50px)"
            //     }
            // });
            sw.keyboard.disable()
        },
        onSlideChangeTransitionEnd: sw => {
            sw.keyboard.enable()
        },
        creativeEffect: {
            prev: {
                translate: [-600, 0, 0],
                opacity: 0
            },
            next: {
                translate: [650, 0, -400],
            }
        },
        modules: [EffectCreative, Keyboard],
        className: "mySwiper2"
    };

    const renderSlides = () => {
        return slides.map(slide => (
            <SwiperSlide>
                <Slide
                    id={slide.id}
                    picture={slide.picture}
                    activeSlide={activeSlideId}
                    slideHover={slideHover}
                    setSlideHover={setSlideHover}
                />
            </SwiperSlide>
        ));
    }

    return (
        <Swiper {...swiperConfig}>
            {renderSlides()}
        </Swiper>
    )
}

export default SwiperSlider;