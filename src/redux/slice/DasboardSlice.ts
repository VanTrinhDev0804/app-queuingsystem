import { createSlice , PayloadAction } from "@reduxjs/toolkit"
import { IDataCharts, IProfile } from "types"

export interface DasboardState {
    ngay ?: IDataCharts[]
    tuan ?: IDataCharts[]
    thang ? : IDataCharts[]
}

const initialState : DasboardState = {
    ngay : undefined,
    tuan: undefined,
    thang: undefined
}   

const DasBoardSlice = createSlice({
    name: 'dasboard',
    initialState,
    reducers: {
        addDataNgay: ( state , action) => {
            state.ngay = action.payload
        },
        addDataTuan: ( state , action) => {
            state.tuan = action.payload
        },
        addDataThang: ( state , action) => {
            state.thang = action.payload
        },
      
    }
})

export const { addDataNgay, addDataTuan, addDataThang} = DasBoardSlice.actions
export default  DasBoardSlice.reducer