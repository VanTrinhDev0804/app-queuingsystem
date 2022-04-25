import { ColumnsType } from "antd/lib/table"
import { Link } from "react-router-dom"
import { Interface } from "readline"
// interface path react rourter
export interface IParams {
    page ?: string
    control? : string 
    id? : string 
}

// custom title for content
export interface IDefaultTitle{
  text : string
}

// customs inter face for header
export interface IHeaderAcount{
  checkControl ? : boolean 
}
export interface IBread{
  titleBread?: string 
  path?: string
}
export interface IHeader extends IHeaderAcount{
   listTitle? :IBread[]
}






export interface IDataCharts{
  x: tring
  y :number
}
export interface ItemCharts{
  data : IDataCharts[]
}
export interface IControlPage{
    controller: string
}
// Thiết bị

export interface ItemTBThietBi{
  key?: number
  maTB?: string
  nameTB?: string
  loaiTb?: string
  diachiIP?: string
  active?: boolean
  connect?: boolean
  dichvu?: Array<string>
  description?:string
  update?: string
}

// Cấp số 
export interface ItemTBCapso{
  key?: number
  stt?: number
  name?: string
  dichvu?: string
  day?: string
  date?:string
  status? : number
  source?: string
  action?: string
}


export interface ItemTBCaiDat{
  key : number
  rolename: string
  numberuser: number
  description: string
  action: string


}





 