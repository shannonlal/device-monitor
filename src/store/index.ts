import reduxThunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import { deviceDetailsReducer } from '../features/device-summary/store/reducer';
const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//export const history = createBrowserHistory();
export const store = createStore(
    combineReducers({ deviceDetails: deviceDetailsReducer }),
    composeEnhancers(applyMiddleware(reduxThunk)),
);
