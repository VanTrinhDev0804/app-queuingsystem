import React from 'react'
import { DatePicker, Layout, Space, Select, Input } from 'antd'

import './styles.scss'

const ControllThietbi = () => {

    const { Option } = Select;
    const { Search } = Input
    const { RangePicker } = DatePicker;
    const handleSelectDichvu = (value: any) => {
        console.log(value)
    }

    const onSearch = (value: string) => {
        console.log(value)
    }
  return (
    <div className="ContentThietbi-control">
                    {/* Dịch vụ */}
                    <div className="ContentThietbi-control-hoatdong">
                        <h5 className='labelSelect'>
                            Trạng thái hoạt động
                        </h5>
                        <Select
                            defaultValue="all"
                            style={{ width: 300 }}
                            bordered={false}
                            onChange={handleSelectDichvu}>
                            <Option value="all">Tất cả</Option>
                            <Option value="active">Hoạt động</Option>
                            <Option value="noactive">Ngưng hoạt động</Option>
                        </Select>
                    </div>

                    {/* tình trạng  */}
                    <div className="ContentThietbi-control-connection">
                        <h5 className='labelSelect'>
                            Tình trạng
                        </h5>
                        <Select
                            defaultValue="all"
                            style={{ width: 300 }}
                            bordered={false}
                        // onChange={handleSelectStatus}
                        >
                            <Option value="all">Tất cả</Option>
                            <Option value="connect">Kết nối</Option>
                            <Option value="noconnect">Mất kết nối</Option>   
                        </Select>
                    </div>

                    {/* Từ khóa*/}
                    <div className="ContentThietbi-control-search">
                        <h5 className='labelSelect'>
                            Từ khóa
                        </h5>
                        <Search
                            placeholder="Nhập từ khóa"
                            onSearch={onSearch}
                            bordered={false}
                            style={{ width:300 }} />

                    </div>
                </div>

  )
}

export default ControllThietbi