import React from 'react'
import { DatePicker, Layout, Space, Select, Input } from 'antd'

import './styles.scss'

const ControllBaocao = () => {
    const { RangePicker } = DatePicker;

    return (
        <div className="ContentBaocao-control">
            {/* Chọn thời gian */}
            <div className="ContentBaocao-control-date">
                <h5 className='labelSelect'>
                    Chọn thời gian
                </h5>
                <Space direction='horizontal'>
                    <RangePicker />
                </Space>

            </div>
            
        </div>

    )
}

export default ControllBaocao