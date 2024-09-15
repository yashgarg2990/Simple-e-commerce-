import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/Cart";

export const store = configureStore({
    reducer : {
        cart : CartSlice.reducer,
    }
});