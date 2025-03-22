import { configureStore } from "@reduxjs/toolkit";
import couterReducer from "./slice/CounterSlice"

const store = configureStore({
    reducer:{
        counter : couterReducer
    }
})

export default store;