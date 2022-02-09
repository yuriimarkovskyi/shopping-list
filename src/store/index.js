import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer } from './itemsReducer';
import visibilitySlice from './visibilitySlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    visibility: visibilitySlice,
  },
});
