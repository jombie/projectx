import { createStore, combineReducers } from 'redux'
import { testReducer } from '../reducers/TestReducer.ts';

export default function configureStore(initialState) {
  let rootReducer = combineReducers({
    testReducer: testReducer
  });

  return createStore(rootReducer, {},
              (<any>window).devToolsExtension ? (<any>window).devToolsExtension() : f => f);
}
