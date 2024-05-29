import { createSlice } from "@reduxjs/toolkit"

const forgetPassSlice = createSlice({
    name: 'forgetPassSlice',
    initialState: {
        isForgetPass: false
    },
    reducers: {
        setIsForgetPass: (state, action) =>{
            state.isForgetPass = action.payload;
        }
    }
});
export const { setIsForgetPass } = forgetPassSlice.actions;
export default forgetPassSlice.reducer;