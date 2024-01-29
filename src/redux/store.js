import { configureStore } from '@reduxjs/toolkit';
import pastriesReducer from './reducers/pastrySlice';
import cartReducer from './reducers/cartSlice';
import uiReducer from './reducers/uiSlice';


export const store = configureStore({
    reducer: {
        pastries: pastriesReducer,
        cart: cartReducer,
        ui: uiReducer
    }
});