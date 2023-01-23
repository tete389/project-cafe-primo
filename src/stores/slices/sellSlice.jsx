import { createSlice } from "@reduxjs/toolkit";
import { textToolbar } from "../../mocks/product-toolbar";
import { store } from "../store";

const initialState = {
  isDrawerSearch: {
    search1: textToolbar.mainSelet[1],
    search2: textToolbar.supSeletCate[0],
  },
  isToolbarSearch: "",
  isDrawerSearchOpen: false,
  isDrawerAddToCartOpen: false,
  isDrawerCartToOderOpen: false,
};

export const sellSlice = createSlice({
  name: "sellAction",
  initialState,
  reducers: {
    onDrawerSearchOpen: (state) => {
      state.isDrawerSearchOpen = !state.isDrawerSearchOpen;
    },
    onDrawerAddToCartOpen: (state) => {
      state.isDrawerAddToCartOpen = !state.isDrawerAddToCartOpen;
    },
    onDrawerCartToOderOpen: (state) => {
      state.isDrawerCartToOderOpen = !state.isDrawerCartToOderOpen;
    },
    onDrawerSearch: (state, value) => {
      state.isDrawerSearch.search1 = value.payload.select1;
      state.isDrawerSearch.search2 = value.payload.select2;
    },
    onToolbarSearch: (state, value) => {
      state.isToolbarSearch = value.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onDrawerSearchOpen,
  onDrawerAddToCartOpen,
  onDrawerCartToOderOpen,
  onDrawerSearch,
  onToolbarSearch,
} = sellSlice.actions;
//export const sellSelector = (state) => state.sellAction.isDrawerMainSelect;
export default sellSlice.reducer;
