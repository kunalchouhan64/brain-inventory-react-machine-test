import { createSlice } from "@reduxjs/toolkit";
import { FetchAPIData } from "../Services/FetchAPIData";


//👉 This is the Redux Toolkit Slice where we describe our action inside the reducer - here we are fetching the data from the API
const APIDataSlice = createSlice({
    name: 'apidata',
    initialState: {
        items: [],
        isLoading: false,
        isEmpty: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(FetchAPIData.pending, (state) => {
            state.isLoading = true,
                state.isEmpty = true
        }).addCase(FetchAPIData.fulfilled, (state, action) => {
            state.isLoading = false,
                state.isEmpty = false,
                state.items = action.payload
        }).addCase(FetchAPIData.rejected, (state) => {
            state.isError = true
        })
    }
})
export default APIDataSlice.reducer