import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
};

const logSlice = createSlice({
    name: 'log',
    initialState,
    reducers: {
        loginSuccess: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
        },
    },
});

export const { loginSuccess, logout } = logSlice.actions;
export default logSlice.reducer;