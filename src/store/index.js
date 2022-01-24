import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { itemsReducer } from './itemsReducer';
import { visibleReducer } from './visibleReducer';

const rootReducer = combineReducers({
  items: itemsReducer,
  visible: visibleReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
