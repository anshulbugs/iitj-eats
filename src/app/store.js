import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from '../components/home/categoriesSlice'
import profileReducer from '../components/profile/profileSlice'

export const store = configureStore({
    reducer:{
        categories: categoriesReducer,
        profile: profileReducer,
    }
})