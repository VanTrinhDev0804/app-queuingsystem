import React from 'react'
import { Table } from 'antd'

import './styles.scss'
import { Link } from 'react-router-dom';

const TableTaiKhoan= () => {
    const data = [];
    for (let i = 1; i <= 10; i++) {
        data.push({
            key: i,
            userName: 'tuyetnguyen@12',
            hoten: 'Nguyen Văn A',
            phone: '0919256712',
            email: 'tuyetnguyen123@gmail.com',
            vaitro:'Kế toán',
            active: true,
            update:'/caidat-user/capnhat'
        });
    }

    const columns = [
        {
            title: 'Tên đăng nhập',
            dataIndex: 'userName',
         
        },
        {
            title: 'Họ tên',
            dataIndex: 'hoten',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
         
        },
        {
            title: 'Email',
            dataIndex: 'email',
         
        },
        {
            title: 'Vai trò',
            dataIndex: 'vaitro',
         
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
                                <span style={{ marginLeft: '8px' }}>
                                    Ngưng hoạt động
                                </span>
                            </div>
                    }
                </>
            )
        },
        {
            title: '',
            dataIndex: 'update',
            render: (link : string) => (
                <Link to={link}
                    style={{
                        whiteSpace: 'nowrap'
                    }}
                >Cập nhật</Link>
            )
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

export default TableTaiKhoan