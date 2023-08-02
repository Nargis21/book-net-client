import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deleteConfirm: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setDeleteConfirm: (state, action) => {
      state.deleteConfirm = action.payload;
    },
  },
});

export const { setDeleteConfirm } = bookSlice.actions;
export default bookSlice.reducer;
