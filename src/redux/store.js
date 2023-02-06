import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import favouriteSlice from './slices/FavouriteSlice';
import itemsSlice from './slices/itemsSlice';

export const store = configureStore({
  reducer: { filterSlice, favouriteSlice, itemsSlice },
});
