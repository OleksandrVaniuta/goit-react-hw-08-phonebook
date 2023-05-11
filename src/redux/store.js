import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactsSlicer';
import { filterSlice } from './filterSlicer';

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
});
