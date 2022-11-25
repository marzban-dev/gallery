import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {fetchArts} from "api/explore.api";
import {IExploreItem} from "pages/explore/components/explore-item/explore-item.types";

export const useExplore = () => {
    // @ts-ignore
    return useInfiniteQuery(["explore"], fetchArts, {
        getNextPageParam: (_lastPage, pages) => {
            return pages.length + 1;
        },
    });
}

export const useArt = (id: number) => {
    // @ts-ignore
    return useQuery(["explore-item", id], fetchArt);
}