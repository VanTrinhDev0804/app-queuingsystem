import React from 'react'
import { DatePicker, Layout, Space, Select, Input } from 'antd'

import './styles.scss'

const ControllHistory = () => {

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
                    <div className="ContentThietbi-control-search">
                        <h5 className='labelSelect'>
                            Từ khóa
                        </h5>
                        <Search
                            placeholder="Nhập từ khóa"
                            onSearch={onSearch}
                            bordered={false}
                            style={{ width:240 }} />

                    </div>
                </div>

  )
}

export default ControllHistory