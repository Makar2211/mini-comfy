import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import favouriteSlice from './slices/FavouriteSlice';

export const store = configureStore({
  reducer: { filterSlice, favouriteSlice },
});
