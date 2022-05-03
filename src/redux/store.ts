import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice'
import CapsoSlice from './slice/CapsoSlice'
import DasboardSlice from './slice/DasboardSlice'
import DichvuSlice from './slice/DichvuSlice'
import ThietbiSlice from './slice/ThietbiSlice'
// ...

export const store = configureStore({
  reducer: {
    auth : authSlice,
    dasboard: DasboardSlice,
    capso : CapsoSlice,
    thietbi: ThietbiSlice,
    dichvu : DichvuSlice
  }

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch