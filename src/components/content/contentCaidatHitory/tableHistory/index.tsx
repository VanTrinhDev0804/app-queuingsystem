import React from 'react'
import { Table } from 'antd'

import './styles.scss'
import { Link } from 'react-router-dom';

const TableHistory = () => {
    const data = [];
    for (let i = 1; i <= 10; i++) {
        data.push({
            key: i,
            userName: 'tuyetnguyen@12',
            time: '01/12/2021 15:12:17',
            IP: '01/12/2021 15:12:17',
            action: 'Cập nhật thông tin dịch vụ DV_01',
        });
    }

    const columns = [
        {
            title: 'Tên đăng nhập',
            dataIndex: 'userName',
         
        },
        {
            title: 'Thời gian tác động',
            dataIndex: 'time',
        },
        {
            title: 'IP thực hiện',
            dataIndex: 'IP',
         
        },
        {
            title: 'Thao tác thực hiện',
            dataIndex: 'action',
         
        },

    ];

    return (
        <div className="Content-Table">

            <Table
                dataSource={data}
                columns={columns} />
        </div>
    )
}

export default TableHistory