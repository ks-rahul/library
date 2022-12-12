import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: "",
  loggedInUser: {},
  permissions: {},
};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setIsLoggedIn, setToken } = authSlice.actions;

export default authSlice.reducer;

// const { loginSuccess, logoutSuccess } = slice.actions;

// export const login =
//   ({ username, password }) =>
//   async (dispatch) => {
//     try {
//       // const res = await api.post('/api/auth/login/', { username, password })
//       dispatch(loginSuccess({ username }));
//     } catch (e) {
//       return console.error(e.message);
//     }
//   };
// export const logout = () => async (dispatch) => {
//   try {
//     // const res = await api.post('/api/auth/logout/')
//     return dispatch(logoutSuccess());
//   } catch (e) {
//     return console.error(e.message);
//   }
// };
