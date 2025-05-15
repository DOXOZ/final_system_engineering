import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  isLoggedIn: false,
};

export const loginFormSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.email = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = loginFormSlice.actions;
export default loginFormSlice.reducer; 