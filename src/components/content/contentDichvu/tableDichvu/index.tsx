import React from 'react'
import { Table } from 'antd'

import './styles.scss'
import { Link } from 'react-router-dom';

const tableDichvu = () => {
    const data = [];
    for (let i = 1; i <= 100; i++) {
        data.push({
            key: i,
            maDV: 'KIO_01',
            tenDV: 'Kiosk',
            describe: `Mô tả  ${i}`,
            active: true,   
            description: '/dichvu/chitiet',
            update: '/dichvu/update',
        });
    }

    const columns = [
        {
            title: 'Mã dịch vụ',
            dataIndex: 'maDV',
        },
        {
            title: 'Tên dịch vụ',
            dataIndex: 'tenDV',
        },
        {
            title: 'Mô tả',
            dataIndex: 'describe',
        },
        {
            title: 'Trạng thái hoạt động',
            dataIndex: 'active',
            render: (checkSatus: boolean) => (
                <>
                    {
                        checkSatus ?
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <img src={require('../../../../assets/icon/circlegreen.png')} />
                                <span style={{ marginLeft: '8px' }}>
                                    Hoạt động
                                </span>
                            </div>
                            :
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <img src={require('../../../../assets/icon/circlered.png')} />
                                <p style={{ marginLeft: '8px' }}>
                                    Ngưng hoạt động
                                </p>
                            </div>
                    }
                </>
            )
        },
    
        {
            title: '',
            dataIndex: 'description',
            render: () => (
                <Link to={'/dichvu/chitiet'}
                    style={{
                        whiteSpace: 'nowrap'
                    }}
                >Chi tiết</Link>
            )
        },
        {
            title: '',
            dataIndex: 'update',
            render: () => (
                <a
                    style={{
                        whiteSpace: 'nowrap'
                    }}
                >Cập nhật</a>
            )
        },

    ];

    return (
        <div className="ContentDichvu-Table">

            <Table
                dataSource={data}
                columns={columns} />
        </div>
    )
}

export default tableDichvu