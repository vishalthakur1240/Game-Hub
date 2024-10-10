import { CURRENT_PAGE_NUMBER, PageNumberActionTypes } from './pageNumberTypes';

// Define the action creator type
export const currentPageNumber = (pageNumber: number): PageNumberActionTypes => {
    return {
        type: CURRENT_PAGE_NUMBER,
        payload: pageNumber
    };
};