import React from 'react'
import { Table } from 'antd'

import './styles.scss'
import { Link } from 'react-router-dom';
import { AuthState } from 'redux/slice/authSlice';

const TableTaiKhoan :React.FC<AuthState>= ( props) => {

    const { userList } = props
    const columns = [
        {
            title: 'Tên đăng nhập',
            dataIndex: 'username',
         
        },
        {
            title: 'Họ tên',
            dataIndex: 'name',
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
            dataIndex: 'role',
         
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
            render: (link : string, record : any) => (
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
                dataSource={userList}
                columns={columns} />
        </div>
    )
}

export default TableTaiKhoan