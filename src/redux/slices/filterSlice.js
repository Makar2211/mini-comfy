import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 0,
  searchInput: '',
  sort: {
    name: 'сортувати за',
    sortProperty: 'title',
  },
};

export const counterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    setCatalog: (state, action) => {
      state.category = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setSerachInput: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { setCatalog, setSort, setSerachInput } = counterSlice.actions;

export default counterSlice.reducer;
