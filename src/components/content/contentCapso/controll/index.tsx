import React from 'react'
import { DatePicker, Layout, Space, Select, Input } from 'antd'

import './styles.scss'

const ControllCapSo = () => {

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
    <div className="ContentCapso-control">
                    {/* Dịch vụ */}
                    <div className="ContentCapso-control-dichvu">
                        <h5 className='labelSelect'>
                            Tên dịch vụ
                        </h5>
                        <Select
                            defaultValue="all"
                            style={{ width: 154 }}
                            bordered={false}
                            onChange={handleSelectDichvu}>
                            <Option value="all">Tất cả</Option>
                            <Option value="san-phu-khoa">Khám sản - Phụ khoa</Option>
                            <Option value="rang-ham-mat">Khám răng hàm mặt</Option>
                            <Option value="tai-mui-hong">Khám tai mũi họng</Option>
                        </Select>
                    </div>

                    {/* tình trạng  */}
                    <div className="ContentCapso-control-status">
                        <h5 className='labelSelect'>
                            Tình trạng
                        </h5>
                        <Select
                            defaultValue="all"
                            style={{ width: 154 }}
                            bordered={false}
                        // onChange={handleSelectStatus}
                        >
                            <Option value="all">Tất cả</Option>
                            <Option value="waite">Đang chờ</Option>
                            <Option value="used">Đã sử dụng</Option>
                            <Option value="skip">Bỏ qua</Option>
                        </Select>
                    </div>


                    {/* nguồn cấp */}
                    <div className="ContentCapso-control-sourch">
                        <h5 className='labelSelect'>
                            Nguồn cấp
                        </h5>
                        <Select
                            defaultValue="all"
                            style={{ width: 154 }}
                            bordered={false}
                        // onChange={handleSelectStatus}
                        >
                            <Option value="all">Tất cả</Option>
                            <Option value="kiosk">Kiosk</Option>
                            <Option value="hethong">Hệ thống</Option>
                        </Select>
                    </div>

                    {/* Chọn thời gian */}
                    <div className="ContentCapso-control-date">
                        <h5 className='labelSelect'>
                            Chọn thời gian
                        </h5>
                        <Space direction='horizontal'>
                            <RangePicker />
                        </Space>

                    </div>
                    {/* Từ khóa*/}
                    <div className="ContentCapso-control-search">
                        <h5 className='labelSelect'>
                            Từ khóa
                        </h5>
                        <Search
                            placeholder="input search text"
                            onSearch={onSearch}
                            bordered={false}
                            style={{ width: 200 }} />

                    </div>
                </div>

  )
}

export default ControllCapSo