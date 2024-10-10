import useDatas from "./useData";

export interface GameScreenshots {
    id: number;
    image: string;
    
}

const useGamesScreenShots = (gameId: string) => useDatas<GameScreenshots>(`/games/${gameId}/screenshots`);
export default useGamesScreenShots;