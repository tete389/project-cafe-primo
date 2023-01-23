import { createSlice } from "@reduxjs/toolkit";
import { textToolbar } from "../../mocks/product-toolbar";

const initialState = {
  isMainSelected: textToolbar.mainSelet[0],
  isSupSelected: "",
  isStatusSelected: textToolbar.statusSeletEn[0],
};

export const selectedSlice = createSlice({
  name: "pToolbarSelect",
  initialState,
  reducers: {
    onMainSelected : (state, value) => {
      state.isMainSelected = value.payload;
    },
    onSupSelected : (state, value) => {
      state.isSupSelected = value.payload;
    },
    onStatusSelected : (state, value) => {
      state.isStatusSelected = value.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onMainSelected, onSupSelected, onStatusSelected } = selectedSlice.actions;

export default selectedSlice.reducer;
