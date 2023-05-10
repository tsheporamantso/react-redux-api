import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    isLoading: true,
    error: undefined,
}

export const userSlice = createSlice ({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {},

})

export default userSlice.reducer;