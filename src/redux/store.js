import { configureStore } from '@reduxjs/toolkit'
import appLogic from './appLogic'
import userSlice from './userSlice'


//tous nos slice sont appeler ici,
//c'est dans le store que sera stocker toutes les etats de redux
export default configureStore({
  reducer: {
    appLogic:appLogic,
    user: userSlice
  },
})