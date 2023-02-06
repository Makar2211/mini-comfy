import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk(
  'filterSlice/fetchItems',
  async (params, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `https://639c650e42e3ad6927305a65.mockapi.io/items?${
          params.category > 0 ? `category=${params.category}` : ''
        }&sortBy=${params.sortCategory.replace('-', '')}&order=${
          params.sortCategory.includes('-') ? 'asc' : 'desc'
        }${params.searchValue ? `&search=${params.searchValue}` : ''}`,
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const initialState = {
  items: [],
  loading: false,
};

const itemsSlice = createSlice({
  name: 'itemsofProduct',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    [fetchItems.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const selectItems = (state) => state.itemsSlice.items;
export const selectLoading = (state) => state.itemsSlice.loading;
export const selectError = (state) => state.itemsSlice.error;

export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
