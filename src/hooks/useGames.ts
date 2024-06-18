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

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useDatas<Game>('/games', { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } }, [selectedGenre?.id, selectedPlatform?.id]);

export default useGames;