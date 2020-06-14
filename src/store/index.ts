
import reduxThunk from 'redux-thunk';
import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore,
} from 'redux';

/** import {
    connectRouter,  
    routerMiddleware,
} from 'connected-react-router'; **/

//import * as reducers from './reducers';

const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//export const history = createBrowserHistory();
export const store = createStore(
    //combineReducers({ ...reducers }),
    composeEnhancers(applyMiddleware(reduxThunk)),
);
