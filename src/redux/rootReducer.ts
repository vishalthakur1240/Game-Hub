// import { combineReducers } from "redux";
// import cakeReducer from "./cake/cakeReducer";
// import iceCreamReducer from "./iceCream/iceCreamReducer";

// const rootReducer = combineReducers({
//     cake: cakeReducer,
//     iceCream: iceCreamReducer
// })

// export default rootReducer;

import { combineReducers } from 'redux';
// import cakeReducer from './game/gameCardReducer';
import gameCardReducer from './game/gameCardReducer';
import pageNumberReducer from './pageNumber/pageNumberReducer';
// import cakeReducer from './cake/cakeReducer';
// import iceCreamReducer from './iceCream/iceCreamReducer';

const rootReducer = combineReducers({
    game: gameCardReducer,
    // iceCream: iceCreamReducer,
    page: pageNumberReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
