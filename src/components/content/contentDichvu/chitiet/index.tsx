import React, { useState } from 'react'
import { Select, Button, Table, Input, DatePicker, Space } from 'antd'
import { Link, Redirect, useHistory } from 'react-router-dom'
import './styles.scss'


const ContentChiTietDichvu = () => {
    const { Option } = Select;
    const { Search } = Input
    const { RangePicker } = DatePicker;


    const data = [];
    for (let i = 20000; i <= 200100; i++) {
        data.push({
            key: i,
            stt: i,
            status: 1,
        });
    }

    const columns = [
        {
            title: 'Số thứ tự',
            dataIndex: 'stt',
        },
     
    //   1 đang thực hiện
    //  0 đã hoàn thành 
    //  nguoc lai vắng
        {
            title: 'Trạng thái ',
            dataIndex: 'status',
            render: (checkSatus :number) => (
                <>
                    {
                        checkSatus ===0 ?
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <img src={require('../../../../assets/icon/circlegreen.png')} />
                                <span >
                                    Đã hoàn thành
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
                                    Đang thực hiện
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
                            <img src={require('../../../../assets/icon/circlenoactive.png')} />
                            <span style={{ marginLeft: '8px' }}>
                                vắng
                            </span>
                        </div>

                    }
                </>
            )
        },
    
     
    ];

    return (
        <div className="ContentDvuChitiet">

            <div className="ContentDvuChitiet-Left">
                <h2>Thông tin thiết bị</h2>

                <div className="ContentDvuChitiet-content_list">
                    <div className="ContentDvuChitiet-content_list_item">
                        <p className='lable'>Mã dịch vụ:</p>
                        <p className='value'>201</p>
                    </div>
                    <div className="ContentDvuChitiet-content_list_item">
                        <p className='lable'>Tên dịch vụ:</p>
                        <p className='value'>Khám tim mạch</p>
                    </div>
                    <div className="ContentDvuChitiet-content_list_item">
                        <p className='lable'>Mô tả:</p>
                        <p className='value'>Chuyên các bệnh lý về tim</p>
                    </div>
                </div>

                <h2>Quy tắc cấp số  </h2>
                <div className="ContentDvuChitiet-content_RoleCapso">
                    <div className="ContentDvuChitiet-content_RoleCapso_item">
                        <p className='lable'> Tăng tự động từ:</p>
                        <p className='value'>
                            <span className='number'>0001 </span> đến  <span className='number'> 9999</span>
                        </p>
                    </div>
                    <div className="ContentDvuChitiet-content_RoleCapso_item">
                        <p className='lable'>  Prefix:</p>
                        <p className='value'>
                            <span className='number space'>0001</span>
                        </p>
                    </div>
                    <div className="ContentDvuChitiet-content_RoleCapso_item">
                        <p className='lable'>  Sunfix: </p>
                        <p className='value'>
                            <span className='number space'>0001</span>
                        </p>
                    </div>
                    <div className="ContentDvuChitiet-content_RoleCapso_item">
                        <p className='lable'>  Reset mỗi ngày</p>
                    </div>
                    <div className="ContentDvuChitiet-content_RoleCapso_item">
                        <p className='value'>Ví dụ: 201- 2001</p>
                    </div>
                </div>

            </div>

            <div className="ContentDvuChitiet-Right">
                <div className="ContentDvuChitiet-Right-control">
                    {/* Dịch vụ */}
                    <div className="ContentDvuChitiet-Right-control-hoatdong">
                        <h5 className='labelSelect'>
                            Trạng thái
                        </h5>
                        <Select
                            defaultValue="all"
                            style={{ width: 160 }}
                            bordered={false}>
                            <Option value="all">Tất cả</Option>
                            <Option value="active">Đã hoàn thành </Option>
                            <Option value="noactive">Đã thực hiện</Option>
                            <Option value="noactive">Vắng</Option>
                        </Select>
                    </div>
                    {/* Chọn thời gian */}
                    <div className="ContentDvuChitiet-Right-control-date">
                        <h5 className='labelSelect'>
                            Chọn thời gian
                        </h5>
                        <Space direction='horizontal'>
                            <RangePicker />
                        </Space>

                    </div>

                    {/* Từ khóa*/}
                    <div className="ContentDvuChitiet-Right-control-search">
                        <h5 className='labelSelect'>
                            Từ khóa
                        </h5>
                        <Search
                            placeholder="Nhập từ khóa"
                            bordered={false}
                            style={{ width: 206 }} />

                    </div>
                </div>
                <div className="ContentDvuChitiet-Right-table">
                    <Table
                        dataSource={data}
                        columns={columns} />
                </div>

            </div>
        </div>
    )
}

export default ContentChiTietDichvu