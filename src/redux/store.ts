import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice'
import CapsoSlice from './slice/CapsoSlice'
// ...

export const store = configureStore({
  reducer: {
    auth : authSlice,
    capso : CapsoSlice,
    
  }

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch