import { createSlice , PayloadAction } from "@reduxjs/toolkit"
import { ItemTBCapso } from "types"


function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
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