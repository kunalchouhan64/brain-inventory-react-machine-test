import { configureStore } from "@reduxjs/toolkit";
import APIDataSlice from "../Slices/APIDataSlice"


//👉 This is the Redux Toolkit Central Store - and we can subscribe the data from any component
const Store = configureStore({
    reducer: {
        apidata: APIDataSlice
    }
})
export default Store