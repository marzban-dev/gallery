import {TSlide} from "./components/slide/slide.types";

export interface ISliderProps {
    slides: TSlide[],
    setActiveSlideContent: (slide: TSlide) => void,
    activeSlideContent: TSlide,
}