import { GameQuery } from "../App";
import useDatas from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Screenshot {
    id: number;
    image: string;
}

interface ESBRRating {
    id: number;
    name: string;
    
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    /*
     parent_platforms: [{platform: {id: 1, name: "PC", slug: "pc"}},…]
        0: {platform: {id: 1, name: "PC", slug: "pc"}}
            platform: {id: 1, name: "PC", slug: "pc"}
                id: 1
                name: "PC"
                slug: "pc"
    */

    metacritic: number | string;
    rating_top: number;
    short_screenshots: Screenshot[];
    rating: number;
    playtime: number;
    esrb_rating: ESBRRating;
    released: string;
    reviews_count: string;
    updated: string;

}

const useGames = (gameQuery: GameQuery, page: number) => useDatas<Game>('/games', { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery?.sortOrder, search: gameQuery.searchText, page } }, [gameQuery, page]);
export default useGames;