import { rootReducer } from './root-reducer';
import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux';

export function getConfiguredStore(history) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = getMiddleware(history);
  let store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middleware)
  ));
  return store;
}

function getMiddleware(history) {
  return [
    createLogger({ collapsed: true, duration: true }),
    routerMiddleware(history),
  ];
}