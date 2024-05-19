import { configureStore } from '@reduxjs/toolkit'
import appLogic from './appLogic'
import userSlice from './userSlice'

export default configureStore({
  reducer: {
    appLogic:appLogic,
    user: userSlice
  },
})