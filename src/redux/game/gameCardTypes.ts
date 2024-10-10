// export const IS_GAME_CARD_OPENED = 'IS_GAME_CARD_OPENED';
// export const RESTORE_CAKE = 'RESTORE_CAKE';

import { Game } from "../../hooks/useGames";

// cakeTypes.ts
// export const BUY_CAKE = 'BUY_CAKE';
// export const RESTORE_CAKE = 'RESTORE_CAKE';
export const IS_GAME_CARD_OPENED = 'IS_GAME_CARD_OPENED';
export const GAME_CARD_CLOSED = 'GAME_CARD_CLOSED';
export const GAME_CARD_OPEN_DETAILS = 'GAME_CARD_OPEN_DETAILS';

// interface BuyCakeAction {
//     type: typeof BUY_CAKE;
// }

// interface RestoreCakeAction {
//     type: typeof RESTORE_CAKsE;
// }

interface IsGameCardOpenedAction {
    type: typeof IS_GAME_CARD_OPENED;
    payload: Game;
}
interface GameCardClosed {
    type: typeof GAME_CARD_CLOSED;
}
interface GameCardOpenDetails {
    type: typeof GAME_CARD_OPEN_DETAILS;
}

export type GameCardActionTypes = IsGameCardOpenedAction | GameCardClosed | GameCardOpenDetails;
