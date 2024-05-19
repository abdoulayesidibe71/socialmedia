import { createSlice } from "@reduxjs/toolkit";

export const appLogic = createSlice({
  name: "appLogic",
  initialState: {
    value: 0,
    ActiveAuth: "Connexion",
    IsSignUpOrLogin: "login",
    IsOpenPosterDetail: false,
    IsOpenUserProfileView: false,
  },
  reducers: {
    handleActiveAuth: (state, action) => {
      state.ActiveAuth = action.payload;
    },
    handleIsSignUpOrLogin: (state, action) => {
      state.IsSignUpOrLogin = action.payload;
    },
    handleIsOpenPosterDetail: (state, action) => {
      state.IsOpenPosterDetail = action.payload;
    },
    handleIsOpenUserProfileView: (state, action) => {
      state.IsOpenUserProfileView = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  handleActiveAuth,
  handleIsSignUpOrLogin,
  handleIsOpenPosterDetail,
  handleIsOpenUserProfileView,
} = appLogic.actions;

export default appLogic.reducer;
