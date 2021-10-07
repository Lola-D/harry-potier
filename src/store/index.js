import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { booksReducer } from './booksReducer';
import { filterReducer } from './filterReducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(
  combineReducers({
    books: booksReducer,
    filter: filterReducer,
  }),
  composedEnhancer
);

export default store;
