import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { newFetchData, bodyPost } from '../../../../data/FetchApi'

export const LoginUser = createAsyncThunk(
    'login',
    async ({name, password}: { name: string, password: string}) => {
        const response = await fetch(
            newFetchData.login,
            bodyPost({ name: name, password: password})
        );
        if (!response.ok){
            throw new Error('Failed to login')
        }
        return response.json()
    }
)
const login = createSlice({
    name: 'login',
    initialState:{
        isLoading: false,
        data: [],
        isError: false,
        isLoggedIn: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(LoginUser.pending, (state, action) => {
            state.isLoading = true
            return state
          })
          builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
            state.isError = false
            state.isLoggedIn = true
            return state
          })
          builder.addCase(LoginUser.rejected, (state, action) => {
            state.isError = true
            return state
          })
    },
})

export default login.reducer