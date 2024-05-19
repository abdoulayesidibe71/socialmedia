import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
   UserData: null,
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