import React from 'react'
import { Table } from 'antd'

import './styles.scss'
import { Link } from 'react-router-dom';
import { ThietbiState } from 'redux/slice/ThietbiSlice';

const TableThietbi: React.FC<ThietbiState> = (props) => {
    const { data } = props

    const columns = [
        {
            title: 'Mã thiết bị',
            dataIndex: 'maTB',
            key: 'maTB',
        },
        {
            title: 'Tên thiết bị',
            dataIndex: 'nameTB',
            key: 'name',
        },
        {
            title: 'Địa chỉ IP',
            dataIndex: 'diachiIP',
            key: 'diachiIP',
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
            title: 'Trạng thái kết nối',
            dataIndex: 'connect',
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
                                    Kết nối
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
                                    Mất kết nối
                                </p>
                            </div>
                    }
                </>
            )
        },
        {
            title: 'Dịch vụ sử dụng',
            dataIndex: 'dichvu',
            render: (text: string) => (
                <div>
                    <div style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        width: '178px',
                        textOverflow: 'ellipsis'
                    }}>

                        {`${text}`}
                    </div>
                    <a>
                        Xem thêm
                    </a>
                </div >

            )

        },

        {
            title: '',
            dataIndex: 'description',
            render: (link: string, record:any) => (
                <Link to={ `${link}/${record.key}`}
                    style={{
                        whiteSpace: 'nowrap'
                    }}
                >Chi tiết</Link>
            )
        },
        {
            title: '',
            dataIndex: 'update',
            render: (link: string, record: any) => (
                <Link to={ `${link}/${record.key}`}
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

export default TableThietbi