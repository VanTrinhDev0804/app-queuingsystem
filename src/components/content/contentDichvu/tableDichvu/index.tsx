import React from 'react'
import { Table } from 'antd'
import './styles.scss'
import { Link } from 'react-router-dom';
import { DichvuState } from 'redux/slice/DichvuSlice';

const TableDichvu : React.FC<DichvuState>= (props) => {
    const { data } = props;

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

export default TableDichvu