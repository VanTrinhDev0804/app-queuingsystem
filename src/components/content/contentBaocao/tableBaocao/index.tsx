import React from 'react'
import { Table } from 'antd'

import './styles.scss'


function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}




const TableBaocao = () => {
    const data = [];
    for (let i = 20000; i <= 20010; i++) {
        data.push({
            key: i,
            stt: 1,
            tenDichvu: 'Lê Quỳnh Ái Vân',
            day: `07:20 - 07/10/2021`,
            date: '1-2-2022',
            status: randomIntFromInterval(0 ,2),
            sourch: 'Kiosk',

        });
    }

    const columns = [
        {
            title: 'Số thứ tự',
            dataIndex: 'stt',
            key: 'stt',
        },
        {
            title: 'Tên dịch vụ',
            dataIndex: 'tenDichvu',
        
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
            dataIndex: 'sourch',

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

export default TableBaocao