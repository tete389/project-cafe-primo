import { createSlice } from "@reduxjs/toolkit";
import { textToolbar } from "../../mocks/product-toolbar";
import { store } from "../store";

const initialState = {
 
  productsApi: [],
  
};

export const productApiSlice = createSlice({
  name: "productApiAction",
  initialState,
  reducers: {
    getProdctsToSearch: (state, action) => {
      state.productsApi = action.payload;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const {
  getProdctsToSearch,
} = productApiSlice.actions;
//export const sellSelector = (state) => state.sellAction.isDrawerMainSelect;
export default productApiSlice.reducer;
