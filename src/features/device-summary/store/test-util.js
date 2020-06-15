// test-utils.js
import React, { ReactElement, ReactNode } from "react";
import { render as rtlRender, RenderOptions} from '@testing-library/react';
import { Provider } from 'react-redux';
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import { 
  initialState as reducerInitialState, 
  deviceDetailsReducer 
} from './reducer';
//import reduxThunk from 'redux-thunk';
//const composeEnhancers = compose;


//const combinedReducer = combineReducers({ deviceDetails:deviceDetailsReducer  })
//const store = createStore(deviceDetailsReducer, reducerInitialState);

import {store as testStore} from '../../../store/index'
function render(
  ui,
  {
    initialState = reducerInitialState,
    testStore,
    ...renderOptions
  } = {},
) {
  function Wrapper({children}) {
    return <Provider store={testStore}>{children}</Provider>
  }
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}

/*function render(
  ui,
  {
    initialState: IDeviceDetailsState = reducerInitialState,
    
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}*/

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }