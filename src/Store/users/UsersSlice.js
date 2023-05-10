import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    isLoading: true,
    error: undefined,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();
        const names = data.results.map(user => user.name);
        return names;
    } catch(error) {
        return error;
    }
})


export const userSlice = createSlice ({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {},

})

export default userSlice.reducer;