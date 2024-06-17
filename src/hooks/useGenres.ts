import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useDatas from "./useData";

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useDatas<Genre>('/genres');

export default useGenres;