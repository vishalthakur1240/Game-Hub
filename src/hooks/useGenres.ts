import genres from "../data/genres.ts";

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({datas: genres, isLoading: false, error: null});
// const useGenres = () => useDatas<Genre>('/genres');

export default useGenres;