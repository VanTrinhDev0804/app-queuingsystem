import { ColumnsType } from "antd/lib/table"
import { Link } from "react-router-dom"
import { Interface } from "readline"

export interface IParams {
    page ?: string
    control? : string 
}
export interface IDefaultTitle{
  text : string
}
export interface IHeaderAcount{
  checkControl ? : boolean 
}
export interface IHeader extends IHeaderAcount{
    title ? : string
    path ? : string
}

export interface IDataCharts{
  x: tring
  y :number
}
export interface ItemCharts{
  data : IDataCharts[]
}



export interface ItemTBCapso{
  key: number
  stt: number
  name: string
  dichvu: string
  day: string
  date:string
  status : string
  sourch: string
  action: string
}
export interface ItemTBCaiDat{
  key : number
  rolename: string
  numberuser: number
  description: string
  action: string


}





 