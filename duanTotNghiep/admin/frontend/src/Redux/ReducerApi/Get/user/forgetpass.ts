import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { newFetchData, bodyPost } from "../../../../data/FetchApi"

export const forgetPass = createAsyncThunk(
    'forgetPass',
    async({email}: {email: string}) => {
        const response = await fetch(
            newFetchData.forgetpass,
            bodyPost({email:email})
        );
        if (!response.ok){
            throw new Error('Failed to forget Pass')
        }
        return response.json()
    }
)
const forget = createSlice({
    name:'forget',
    initialState:{
        isLoading: false,
        isError: false,
        data: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(forgetPass.pending, (state) => {
                state.isLoading = true;
                return state
            })
            .addCase(forgetPass.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.data = action.payload;
                return state
            })
            .addCase(forgetPass.rejected, (state, action) => {
                state.isError = true;
                return state
            });
    }
});

export default forget.reducer