import {GetServerSideProps, NextPage} from "next";
import Slider from "./components/slider";
import Explore from "./components/explore";
import React, {useState} from "react";
import {TSlide} from "./components/slider/components/slide/slide.types";
import Image1 from "public/assets/img/image-1.jpg";
import Image2 from "public/assets/img/image-2.jpg";
import Image3 from "public/assets/img/image-3.jpg";
import Image4 from "public/assets/img/image-4.jpg";
import BackgroundParallax from "./components/background-parallax";
import {AnimatePresence, AnimateSharedLayout, motion, Variants} from "framer-motion";
import SelectedArt from "./components/selected-art";
import {dehydrate, QueryClient} from "@tanstack/query-core";
import {fetchArts} from "api/explore.api";
import {IExploreItem} from "pages/explore/components/explore-item/explore-item.types";

const ExplorePage: NextPage<{ arts: IExploreItem[] }> = ({arts}) => {

    const slides: TSlide[] = [
        {
            id: 1,
            title: "Leonardo Davinci",
            description: "I present three versions of the website concept",
            picture: Image1
        },
        {
            id: 2,
            title: "Leonardo Davinci 2",
            description: "I present three versions of the website concept for the mobile version",
            picture: Image2
        },
        {
            id: 3,
            title: "Leonardo Davinci 3",
            description: "I present three versions of the website concept for the",
            picture: Image3
        },
        {
            id: 4,
            title: "Leonardo Davinci 4",
            description: "I present three versions of the website concept for the",
            picture: Image4
        },
        {
            id: 5,
            title: "Leonardo Davinci 5",
            description: "I present three versions of the website concept for the",
            picture: Image3
        },
    ];

    const [selectedArt, setSelectedArt] = useState<number | null>(null);
    const [activeSlideContent, setActiveSlideContent] = useState<TSlide>(slides[0]);

    return (
        <main className="relative h-screen">
            {/*@ts-ignore*/}
            <AnimateSharedLayout type="crossfade">
                <AnimatePresence>
                    {selectedArt && (
                        <SelectedArt
                            setSelectedArt={setSelectedArt}
                            selectedArt={selectedArt}
                        />
                    )}
                </AnimatePresence>
                {/*<Header/>*/}
                <BackgroundParallax activeSlideContent={activeSlideContent}/>
                <Slider
                    slides={slides}
                    activeSlideContent={activeSlideContent}
                    setActiveSlideContent={setActiveSlideContent}
                />
                <Explore
                    setSelectedArt={setSelectedArt}
                    selectedArt={selectedArt}
                />
            </AnimateSharedLayout>
        </main>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const queryClient = new QueryClient();
    await queryClient.prefetchInfiniteQuery(["explore"], () => fetchArts(1, 5));

    return {
        props: {
            dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
        }
    };
}

export default ExplorePage;