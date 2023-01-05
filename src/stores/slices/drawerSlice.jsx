import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
};

export const drawerSlice = createSlice({
  name: "clickDrawer",
  initialState,
  reducers: {
    onClickDrawer: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onClickDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
