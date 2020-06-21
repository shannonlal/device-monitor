import reduxThunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import { deviceDetailsReducer } from '../features/device-summary/store/reducer';
import { loginReducer } from '../features/login/store/reducer';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const combinedReducers = combineReducers({
    deviceDetails: deviceDetailsReducer,
    login: loginReducer,
});
//export const history = createBrowserHistory();
export const store = createStore(combinedReducers, composeEnhancers(applyMiddleware(reduxThunk)));
