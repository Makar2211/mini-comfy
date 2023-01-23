import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favouriteItems: [],
};

export const counterSlice = createSlice({
  name: 'favouriteSlice',
  initialState,
  reducers: {
    setAddFavouriteItem: (state, action) => {
      state.favouriteItems.push(action.payload);
    },
    removeFromFavouriteItem: (state, action) => {
      state.favouriteItems = state.favouriteItems.filter(
        (favouriteItem) => favouriteItem.id !== action.payload,
      );
    },
  },
});

export const { setAddFavouriteItem, removeFromFavouriteItem } = counterSlice.actions;

export default counterSlice.reducer;
