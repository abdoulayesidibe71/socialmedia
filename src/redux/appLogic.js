import { createSlice } from "@reduxjs/toolkit";

export const appLogic = createSlice({
  name: "appLogic",
  initialState: {
//ActiveAuth sert a savoir si sur la page /authentication, si c'est le composant "Login" ou "SignUp" est afficher
//si ActiveAuth est egal a "Connexion" alors c'est le composant "Login" ou "SignUp" est afficher qui sera afficher
//sinon on affiche le composant "SignUp"
    ActiveAuth: "Connexion",
    //
    IsSignUpOrLogin: "login",

    //sert a gerer l'affichage du modal PostMoreDetailModal
    IsOpenPosterDetail: false,
    //sert a gerer l'affichage le composant UserProfileView
    IsOpenUserProfileView: false,
  },

  //les reducers permettent de mettre a jours les etat de l'application
  
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
