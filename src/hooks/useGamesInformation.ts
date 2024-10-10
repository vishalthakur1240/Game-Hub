import useDatas from "./useData.ts";

export interface GameDescription{
    id: number;
    name: string;
    description: string;
    data: Object;
}

const useGamesInformation = (gameId: number) => useDatas<GameDescription>(`/games/${gameId}`);

export default useGamesInformation;