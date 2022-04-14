import React from 'react'
import { Table } from 'antd'

import './styles.scss'


function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}




const TableCapSo = () => {
    const data = [];
    for (let i = 1; i <= 100; i++) {
        data.push({
            key: i,
            stt: randomIntFromInterval(20000, 30000),
            name: 'Lê Quỳnh Ái Vân',
            dichvu: `khám tim mạch`,
            day: `25-12-2021`,
            date: '1-2-2022',
            status: 'Đang chờ ',
            sourch: 'Kiosk',
            action: '/chitiet',
        });
    }

    const columns = [
        {
          title: 'STT',
          dataIndex: 'stt',
          key: 'stt',
        },
        {
          title: 'Tên Khách Hàng',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Dịch vụ',
          dataIndex: 'dichvu',
          key: 'dichvu',
        },
        {
            title: 'Thời gian cấp',
            dataIndex: 'day',
          },
          {
            title: 'Hạn sử dụng',
            dataIndex: 'date',
           
          },
          {
            title: 'Tình trạng',
            dataIndex: 'status',
            
          },
          {
            title: 'Nguồn cấp',
            dataIndex: 'sourch',
            
          },
          {
            title: '',
            dataIndex: 'action',
            render: ()=>(
                <a>Chi tiết</a>
            )
          },
          
      ];

    return (
        <div className="ContentCapso-Table">

            <Table
                dataSource={data}
                columns={columns} />
        </div>
    )
}

export default TableCapSo