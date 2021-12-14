import {applyMiddleware, combineReducers, createStore} from 'redux';
import {itemsReducer} from './itemsReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {visibleReducer} from './visibleReducer';

const rootReducer = combineReducers({
  items: itemsReducer,
  visible: visibleReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));