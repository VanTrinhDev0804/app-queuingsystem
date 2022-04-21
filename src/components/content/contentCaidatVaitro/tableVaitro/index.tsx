import React from 'react'
import { Table } from 'antd'

import './styles.scss'
import { Link } from 'react-router-dom';

const TableVaitro = () => {
    const data = [];
    for (let i = 1; i <= 10; i++) {
        data.push({
            key: i,
            tenVaitro: 'Kế toán',
            user: 6,
            description: 'Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu',
            update: '/caidat-vaitro/capnhat',
        });
    }

    const columns = [
        {
            title: 'Tên vai trò',
            dataIndex: 'tenVaitro',
         
        },
        {
            title: 'Số người dùng',
            dataIndex: 'user',
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            width: 540, 
        },
        {
            title: '',
            dataIndex: 'update',
            render: (value:string) => (
                <Link to={value}
                    style={{
                        whiteSpace: 'nowrap'
                    }}
                >Cập nhật</Link>
            )
        },

    ];

    return (
        <div className="ContentThietbi-Table">

            <Table
                dataSource={data}
                columns={columns} />
        </div>
    )
}

export default TableVaitro