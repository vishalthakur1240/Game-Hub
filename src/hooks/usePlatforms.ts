import useDatas from "./useData";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useDatas<Platform>('/platforms/lists/parents');

export default usePlatforms;