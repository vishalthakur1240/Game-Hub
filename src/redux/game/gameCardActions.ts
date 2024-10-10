// import { BUY_CAKE, RESTORE_CAKE, IS_GAME_CARD_OPENED } from "./cakeTypes"

// export const isGameCardOpened = () => {
//     return {
//         type: IS_GAME_CARD_OPENED,
//     }
// }

// export const restoreCake = () => {
//     return {
//         type: RESTORE_CAKE
//     }
// }


// cakeActions.ts
import { Game } from '../../hooks/useGames';
import { IS_GAME_CARD_OPENED, GameCardActionTypes, GAME_CARD_CLOSED, GAME_CARD_OPEN_DETAILS } from './gameCardTypes';

// Define the action creator type
export const isGameCardOpened = (gameDetails: Game): GameCardActionTypes => {
    return {
        type: IS_GAME_CARD_OPENED,
        payload: gameDetails
    };
};

export const gameCardClosed = (): GameCardActionTypes => {
    return {
        type: GAME_CARD_CLOSED,
    };
};

// export const gameCardOpenDetails = (): GameCardActionTypes => {
//     return {
//         type: GAME_CARD_OPEN_DETAILS,
//     };
// };
