import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../features/posts/postSlice'
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
  reducer: {
    postReducer: postReducer,
    usersReducer: usersReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch