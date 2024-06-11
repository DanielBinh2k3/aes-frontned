// slices.js
import { createSlice } from '@reduxjs/toolkit'
import { emailSignIn, facebookSignIn, googleSignIn, registerUser } from '../actions/authActions'

const initialAuthState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(facebookSignIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(facebookSignIn.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.success = true;
      })
      .addCase(facebookSignIn.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(googleSignIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleSignIn.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.success = true;
      })
      .addCase(googleSignIn.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(emailSignIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(emailSignIn.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.success = true;
      })
      .addCase(emailSignIn.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

const userSlice = createSlice({
  name: 'user',
  initialState: initialAuthState,
    logout: (state) => {
      localStorage.removeItem('userToken') // deletes token from storage
      state.loading = false
      state.userInfo = null
      state.userToken = null
      state.error = null
    },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

// export actions
export const { logout } = userSlice.actions

export const authReducer = authSlice.reducer
export const userReducer = userSlice.reducer
