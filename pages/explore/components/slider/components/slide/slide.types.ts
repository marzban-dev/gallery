export type TSlide = {
    id: number;
    picture: any;
    title: string;
    description: string;
}

export interface ISlideProps extends Omit<TSlide, "description" | "title"> {
    activeSlide: number;
    setSlideHover: ((isHover: boolean) => void) | undefined;
    slideHover: boolean | undefined;
}