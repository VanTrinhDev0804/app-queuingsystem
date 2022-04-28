import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Item } from "rc-menu"
import { ItemTBDichvu } from "types"



export interface DichvuState {
    data: ItemTBDichvu[]
}

const initialState: DichvuState = {
    data:[]
}

const dichvuState = createSlice({
    name: 'dichvu',
    initialState,
    reducers: {
        addItemsTBDichvu: (state, action) => {
            state.data = action.payload
        },
        updateItemsDV: (state, action) => {
            let index = state.data?.findIndex((it)=>{
               return it.key === action.payload.key
            });
            state.data[index] = action.payload
        }
    }
})

export const { addItemsTBDichvu, updateItemsDV } = dichvuState.actions
export default dichvuState.reducer