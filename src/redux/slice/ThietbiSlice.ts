import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Item } from "rc-menu"
import { ItemTBThietBi } from "types"



export interface ThietbiState {
    data: ItemTBThietBi[]
}

const initialState: ThietbiState = {
    data:[]
}

const thietbiState = createSlice({
    name: 'thietbi',
    initialState,
    reducers: {
        addItemsTBThietbi: (state, action) => {
            state.data = action.payload
        },
        updateItems: (state, action) => {
            let index = state.data?.findIndex((it)=>{
               return it.key === action.payload.key
            });
            state.data[index] = action.payload
        }
    }
})

export const { addItemsTBThietbi, updateItems } = thietbiState.actions
export default thietbiState.reducer