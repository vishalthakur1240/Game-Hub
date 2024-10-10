export const CURRENT_PAGE_NUMBER = 'CURRENT_PAGE_NUMBER';
// export const GAME_CARD_CLOSED = 'GAME_CARD_CLOSED';
// export const GAME_CARD_OPEN_DETAILS = 'GAME_CARD_OPEN_DETAILS';

// interface BuyCakeAction {
//     type: typeof BUY_CAKE;
// }

// interface RestoreCakeAction {
//     type: typeof RESTORE_CAKsE;
// }

interface CurrentPageNumberAction {
    type: typeof CURRENT_PAGE_NUMBER;
    payload: number;
}
// interface GameCardClosed {
//     type: typeof GAME_CARD_CLOSED;
// }
// interface GameCardOpenDetails {
//     type: typeof GAME_CARD_OPEN_DETAILS;
// }

export type PageNumberActionTypes = CurrentPageNumberAction;
// export type GameCardActionTypes = IsGameCardOpenedAction | GameCardClosed | GameCardOpenDetails;
