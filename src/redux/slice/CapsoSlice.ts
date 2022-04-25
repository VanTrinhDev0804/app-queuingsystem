import { createSlice , PayloadAction } from "@reduxjs/toolkit"
import { ItemTBCapso, ItemTBThietBi } from "types"



export interface CapsoState {
    data ? : ItemTBCapso[] 
}

const initialState : CapsoState= {
    data : [],
}

const capsoState = createSlice({
    name: 'capso',
    initialState,
    reducers: {
        addItemsTBCapso: ( state , action) => {
            state.data = action.payload
        }
    }
})

export const { addItemsTBCapso } = capsoState.actions
export default  capsoState.reducer