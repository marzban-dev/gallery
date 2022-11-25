import {StaticImageData} from "next/image";

export interface IExploreItem {
    id: number;
    picture: StaticImageData;
}

export interface IExploreItemProps extends IExploreItem {
    selectedArt: number | null;
    setSelectedArt: (id: null | number) => void;
}