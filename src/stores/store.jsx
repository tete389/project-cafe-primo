
import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
// import { pokemonApi } from './services/pokemon'
import drawerReducer from './slices/drawerSlice'
import selectedReducer from './slices/pToolbarSelectSlice';
import sellActionReducer from './slices/sellSlice';
import productApiSlice from './slices/productApiSlice';

export const store = configureStore({
  reducer: {

    clickDrawer: drawerReducer,
    pToolbarSelect: selectedReducer,
    sellAction: sellActionReducer,
    productApi: productApiSlice,
  },

});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)