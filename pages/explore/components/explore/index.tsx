import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {useExplore} from "hooks/useExplore";
import ExploreItem from "pages/explore/components/explore-item";
import {IExploreItem} from "pages/explore/components/explore-item/explore-item.types";
import {IExploreProps} from "./explore.types";

const Explore: React.FC<IExploreProps> = ({selectedArt, setSelectedArt}) => {
    const router = useRouter();
    const {data: arts, fetchNextPage} = useExplore();

    useEffect(() => {
        // @ts-ignore
        const masonryGrid = new Masonry('.explore-grid', {
            // gutter: 10,
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.grid-item',
            // use element for option
            // columnWidth: '.grid-sizer',
            percentPosition: true
        });

        // masonryGrid.imagesLoaded().progress( function() {
        //     masonryGrid.masonry('layout');
        // });
    });

    const renderArts = () => {
        let artsList: IExploreItem[] = [];

        arts?.pages.forEach((page) => page.forEach(art => artsList.push(art)))

        return artsList.map(art => (
            <ExploreItem
                id={art.id}
                picture={art.picture}
                setSelectedArt={setSelectedArt}
                selectedArt={selectedArt}
            />
        ));
    }

    return (
        <section className="w-full page-section h-screen mt-[400px] px-[100px]">
            <div className="explore-grid w-full">
                {renderArts()}
            </div>
        </section>
    )
}

export default Explore;