import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


//👉 This is the Async Thunk function for Fetching the data from API
export const FetchAPIData = createAsyncThunk("FetchAPIData", async () => {
    const response = await axios.get('https://api.rootnet.in/covid19-in/stats/latest')
    return response?.data
})
