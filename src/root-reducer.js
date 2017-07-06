import { combineReducers } from 'redux';
import { counterReducer } from './features/counter/counter.reducer';
import { routerReducer } from 'react-router-redux';

export const rootReducer = combineReducers({
  counter: counterReducer,
  router: routerReducer,
})
