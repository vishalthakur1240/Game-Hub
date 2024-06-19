import { GameQuery } from "../App";
import useDatas from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
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

    metacritic: number;
}

const useGames = (gameQuery: GameQuery) => useDatas<Game>('/games', { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery?.sortOrder, search: gameQuery.searchText } }, [gameQuery]);

export default useGames;