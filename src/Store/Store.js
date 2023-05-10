import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Store/users/UsersSlice'

export const store = configureStore ({
    reducer: {
        user: userReducer,
    }
})