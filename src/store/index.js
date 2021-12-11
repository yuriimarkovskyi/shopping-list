import {applyMiddleware, createStore} from 'redux';
import {itemsReducer} from './itemsReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const store = createStore(itemsReducer, composeWithDevTools(applyMiddleware(thunk)));