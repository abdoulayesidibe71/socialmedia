import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {

    //state qui sert a stocker les information de l'utilisateur

   UserData: null,
   //state qui sert a stocker les information de tous les utilisateur
   AllUsers: null
  },
  reducers: {
  
    handleUserData: (state, action) => {
      state.UserData = action.payload
    },

    handleAllUsers: (state, action) => {
      state.AllUsers = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { handleUserData, handleAllUsers } = userSlice.actions

export default userSlice.reducer