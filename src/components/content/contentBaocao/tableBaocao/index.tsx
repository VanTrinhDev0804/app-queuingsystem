import React from 'react'
import { Table } from 'antd'

import './styles.scss'
import { CapsoState } from 'redux/slice/CapsoSlice'


function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}




const TableBaocao : React.FC<CapsoState> = (props) => {

    const {data} = props
    console.log(data)
    const columns = [
        {
            title: 'Số thứ tự',
            dataIndex: 'stt',
            key: 'stt',
        },
        {
            title: 'Tên dịch vụ',
            dataIndex: 'dichvu',
        
        },

        {
            title: 'Thời gian cấp',
            dataIndex: 'day',
        },
        //   1 đang chờ
        //  0 đã sử dụng
        //  nguoc lai bo qua
        {
            title: 'Trạng thái ',
            dataIndex: 'status',
            render: (checkSatus: number) => (
                <>
                    {
                        checkSatus === 0 ?
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <img src={require('../../../../assets/icon/circlenoactive.png')} />
                                <span >
                                    Đã sử dụng
                                </span>
                            </div>
                            :
                            checkSatus === 1 ?
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
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
                                        justifyContent: 'center'
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

export default TableBaocao