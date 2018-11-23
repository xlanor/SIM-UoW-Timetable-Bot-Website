import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import rootReducer from './reducers';

const middleware = applyMiddleware(promise(), thunk); 
let store = createStore(
  rootReducer,
  undefined,
  compose(middleware),
);

export default store;
