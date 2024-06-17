import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useDatas from "./useData";

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

const useGames = () => useDatas<Game>('/games');

export default useGames;