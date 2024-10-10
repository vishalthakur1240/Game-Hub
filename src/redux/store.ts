// import { applyMiddleware, combineReducers, createStore } from 'redux';
// import rootReducer from './rootReducer';
// import logger from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension';

// // const store = createStore(rootReducer, applyMiddleware(logger));
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

// export default store;

import { applyMiddleware, createStore, Middleware } from 'redux';
import rootReducer, { RootState } from './rootReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

// Define the type for middleware
const middleware: Middleware[] = [logger];

// Create the store with the correct rootReducer type
const store = createStore<RootState, any, {}, {}>(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

