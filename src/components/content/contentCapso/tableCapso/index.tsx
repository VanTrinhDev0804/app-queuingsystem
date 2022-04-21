import React, { useEffect } from 'react'
import { Table } from 'antd'
import { Link } from 'react-router-dom'
import './styles.scss'
import { CapsoState } from 'redux/slice/CapsoSlice'


const TableCapSo: React.FC<CapsoState> = (props) => {
    const { data } = props
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
            key: 'day'
        },
        {
            title: 'Hạn sử dụng',
            dataIndex: 'date',
            key: 'date'

        },
        {
            title: 'Trạng thái ',
            dataIndex: 'status',
            key: 'status',
            render: (checkSatus: number) => (
                <   >
                    {
                        checkSatus === 0 ?
                            <div key={checkSatus}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start'
                                }}
                            >
                                <img src={require('../../../../assets/icon/circlenoactive.png')} />
                                <span style={{ marginLeft: '8px' }}>
                                    Đã sử dụng
                                </span>
                            </div>
                            :
                            checkSatus === 1 ?
                                <div key={checkSatus}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start'
                                    }}
                                >
                                    <img src={require('../../../../assets/icon/circleblue.png')} />
                                    <span style={{ marginLeft: '8px' }}>
                                        Đang chờ
                                    </span>
                                </div>
                                :
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start'
                                    }}
                                >
                                    <img src={require('../../../../assets/icon/circlered.png')} />
                                    <span style={{ marginLeft: '8px' }}>
                                        Đã bỏ qua
                                    </span>
                                </div>

                    }
                </>
            )
        },
        {
            title: 'Nguồn cấp',
            dataIndex: 'source',
            key: 'source'
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            render: (link: string, record: any) => (
                <Link to={
                    `${link}/${record.key}`
                }>Chi tiết</Link>
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
TableCapSo.defaultProps = {
    data: []
}

export default TableCapSo