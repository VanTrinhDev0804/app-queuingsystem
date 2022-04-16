import React from 'react'
import { DatePicker, Layout, Space, Select, Input } from 'antd'

import './styles.scss'

const ControllDichvu = () => {

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
        <div className="ContentDichvu-control">
            {/* Dịch vụ */}
            <div className="ContentDichvu-control-hoatdong">
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
            {/* Chọn thời gian */}
            <div className="ContentDichvu-control-date">
                <h5 className='labelSelect'>
                    Chọn thời gian
                </h5>
                <Space direction='horizontal'>
                    <RangePicker />
                </Space>

            </div>

            {/* Từ khóa*/}
            <div className="ContentDichvu-control-search">
                <h5 className='labelSelect'>
                    Từ khóa
                </h5>
                <Search
                    placeholder="Nhập từ khóa"
                    onSearch={onSearch}
                    bordered={false}
                    style={{ width: 300 }} />

            </div>
        </div>

    )
}

export default ControllDichvu