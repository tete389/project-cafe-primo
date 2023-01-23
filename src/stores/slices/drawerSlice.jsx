import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenWeb: true,
  isOpenMobile : false,
  isIndex : 0
};

export const drawerSlice = createSlice({
  name: "clickDrawer",
  initialState,
  reducers: {
    onClickDrawerWeb: (state) => {
      state.isOpenWeb = !state.isOpenWeb;
      
    },
    onClickDrawerMobile: (state) => {
      state.isOpenMobile = !state.isOpenMobile;
      
    },
    onClickDrawerIndex: (state , index) => {
      state.isIndex = index.payload;
      
    },
  },
});

// Action creators are generated for each case reducer function
export const { onClickDrawerWeb, onClickDrawerMobile, onClickDrawerIndex } = drawerSlice.actions;

export default drawerSlice.reducer;
