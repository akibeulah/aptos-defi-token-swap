import {createSlice} from "@reduxjs/toolkit";

export type userState = {
    _id: string | null,
    email: string | null,
    username: string | null,
}
const userDetailsFromLocalStorage = typeof localStorage !== 'undefined' ? sessionStorage.getItem("user") : null;

const initialState = {
    isAuthenticated: !!userDetailsFromLocalStorage,
    currentUser: userDetailsFromLocalStorage ? JSON.parse(userDetailsFromLocalStorage) : [],
    userAction: {
        loading: false,
        error: null,
        success: false,
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserAuthentication: (state, action) => {
            state.isAuthenticated = action.payload
        },
        setUserAction: (state, action) => {
            state.userAction.loading = action.payload
        },
        setUser: (state, action) => {
            state.currentUser = action.payload
            state.userAction.loading = false
        }
    }
})


export const {
    setUser,
    setUserAction,
    setUserAuthentication
} = userSlice.actions

export default userSlice.reducer