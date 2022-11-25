import {IExploreItem} from "pages/explore/components/explore-item/explore-item.types";
import Image1 from "public/assets/img/image-1.jpg";
import Image2 from "public/assets/img/image-2.jpg";
import Image3 from "public/assets/img/image-3.jpg";
import Image4 from "public/assets/img/image-4.jpg";
import Image5 from "public/assets/img/image-5.jpg";
import Image6 from "public/assets/img/image-6.jpg";
import Image7 from "public/assets/img/image-8.jpg";

const arts: IExploreItem[] = [
    {
        id: 1,
        picture: Image1,
    },
    {
        id: 2,
        picture: Image2,
    },
    {
        id: 3,
        picture: Image3,
    },
    {
        id: 4,
        picture: Image4,
    },
    {
        id: 5,
        picture: Image5,
    },
    {
        id: 6,
        picture: Image6,
    },
    {
        id: 7,
        picture: Image7,
    },
    {
        id: 8,
        picture: Image1,
    },
    {
        id: 9,
        picture: Image2,
    },
    {
        id: 10,
        picture: Image3,
    },
    {
        id: 11,
        picture: Image5,
    },
    {
        id: 12,
        picture: Image6,
    },
    {
        id: 13,
        picture: Image7,
    },
    {
        id: 14,
        picture: Image1,
    },
    {
        id: 15,
        picture: Image2,
    }
];

export const fetchArts = async (page: number, limit: number) => {
    const start = (page * limit) - limit;
    const end = page * limit;

    return arts;
}

export const fetchArt = async (id: number) => {
    return arts.find(art => art.id === id);
}