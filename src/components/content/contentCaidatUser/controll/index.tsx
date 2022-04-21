import React from 'react'
import { DatePicker, Layout, Space, Select, Input } from 'antd'

import './styles.scss'

const ControllUser= () => {

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
        <div className="Content-control">
          {/* vai tro */}
          <div className="ContentDichvu-control-hoatdong">
                <h5 className='labelSelect'>
                    Tên vai trò
                </h5>
                <Select
                    defaultValue="all"
                    style={{ width: 300 }}
                    bordered={false}
                    onChange={handleSelectDichvu}>
                    <Option value="all">Tất cả</Option>
                    <Option value="ketoan">Kế toán</Option>
                    <Option value="quanly">Quản lý</Option>
                    <Option value="admin">Admin</Option>
                </Select>
            </div>

            {/* Từ khóa*/}
            <div className="Content-control-search">
                <h5 className='labelSelect'>
                    Từ khóa
                </h5>
                <Search
                    placeholder="Nhập từ khóa"
                    onSearch={onSearch}
                    bordered={false}
                    style={{ width: 240 }} />

            </div>
        </div>

    )
}

export default ControllUser