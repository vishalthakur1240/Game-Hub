import { CURRENT_PAGE_NUMBER, PageNumberActionTypes } from './pageNumberTypes';


interface PageState {
    pageNumber: number;
}
const initialState: PageState = {
    pageNumber: 1
};

const pageNumberReducer = (state = initialState, action: PageNumberActionTypes): PageState => {

    switch (action.type) {
        case CURRENT_PAGE_NUMBER:
            console.log(state, action);
            return {
                ...state,
                pageNumber: action.payload
            };
        // case GAME_CARD_CLOSED:
        //     console.log("in is called ds");
        //     console.log(state, action);
        //     return {
        //         ...state,
        //         gameCardOpened: false,
        //     };
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

export default pageNumberReducer;
