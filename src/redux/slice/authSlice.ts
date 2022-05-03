import { createSlice , PayloadAction } from "@reduxjs/toolkit"
import { IProfile } from "types"

export interface AuthState {
    currentUser? : IProfile[]
    userList?:  IProfile[]
    // loading: boolean
}

const initialState : AuthState = {
    currentUser: undefined,
    userList: [],
    // loading : false,
}   

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addUser: ( state , action) => {
            state.currentUser = action.payload
        },
        addListUser: ( state , action) => {
            state.userList = action.payload
        }
    }
})

export const { addUser , addListUser} = authSlice.actions
export default  authSlice.reducer

