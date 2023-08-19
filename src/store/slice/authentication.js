import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
  },
  reducers: {
    setLoginState: state => {
      state.isLogin = !state.isLogin
    }
  },
});

export const { setLoginState } = slice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const stateIsLogin = state => state.auth.isLogin;

export default slice.reducer;
