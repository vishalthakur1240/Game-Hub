// import { BUY_CAKE, RESTORE_CAKE, IS_GAME_CARD_OPENED } from "./cakeTypes"

// const initialState = {
//     gameCardOpened: false
// }

// const cakeReducer = (state = initialState, action) => {
//     switch (action.type) { 
//         case IS_GAME_CARD_OPENED: return {
//             ...state,
//             gameCardOpened: true
//         }

//         // case RESTORE_CAKE: return {
//         //     ...state,
//         //     numOfCakes: state.numOfCakes + 1
//         // }

//         default: return state
//     }
// }

// export default cakeReducer;

// cakeReducer.ts
import { IS_GAME_CARD_OPENED, GameCardActionTypes, GAME_CARD_CLOSED } from './gameCardTypes';
import { Game } from "../../hooks/useGames";

interface GameState {
    gameCardOpened: boolean;
    openedGame?: Game | null; 
}
const initialState: GameState = {
    gameCardOpened: false,
    openedGame: null,
};

const gameCardReducer = (state = initialState, action: GameCardActionTypes): GameState => {
    switch (action.type) {
        case IS_GAME_CARD_OPENED:
            console.log("in is called");
            console.log(state, action);
            return {
                ...state,
                gameCardOpened: true,
                openedGame: action.payload
            };
        case GAME_CARD_CLOSED:
            console.log("in is called ds");
            console.log(state, action);
            return {
                ...state,
                gameCardOpened: false,
            };
        // Uncomment and update if needed
        // case RESTORE_CAKE:
        //     return {
        //         ...state,
        //         numOfCakes: state.numOfCakes + 1,
        //     };
        default:
            return state;
    }
};

export default gameCardReducer;
