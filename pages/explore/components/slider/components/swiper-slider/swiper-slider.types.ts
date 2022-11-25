import {TSlide} from "../slide/slide.types";

export interface ISwiperSliderProps {
    slides: TSlide[];
    setActiveSlideId: (id: number) => void;
    activeSlideId: number;
    setActiveSlideContent: (slide: TSlide) => void;
    setSlideHover: (isHover: boolean) => void;
    slideHover : boolean;
}