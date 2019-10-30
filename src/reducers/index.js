import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import premierLeague from './premierLeague'

// Middlewares
let middlewares = [thunk];

const store = createStore(
    combineReducers({
      premierLeague
    }),
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
);

export default store;
