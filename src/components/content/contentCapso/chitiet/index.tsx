import React, { useState } from 'react'
import { Select, Button, Form, Input } from 'antd'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'redux/hooks'
import './styles.scss'
import { IParams } from 'types'
const ContentCapsoChitiet = () => {

    const { data } = useAppSelector(state => state.capso)
    const { id }: IParams = useParams();
    const itemsChitiet = data?.filter((item) => {
        return (`${item.stt}` === id)
    })
    const user ={
        userName : itemsChitiet?.values.name,
        email: 'nguyendung@gmail.com',
        sdt: '0948523623'
    }

    const renderItem = itemsChitiet?.map((item, index) => {
        return (
            <div className="ContentCapsoChitiet-content_description">

                <div className="ContentCapsoChitiet-content_description-listLeft">
                    <div className="ContentCapsoChitiet-content_description-listLeft_item">
                        <p className='lable'>Họ tên:</p>
                        <p className='value'>{item.name}</p>
                    </div>
                    <div className="ContentCapsoChitiet-content_description-listLeft_item">
                        <p className='lable'>Tên dịch vụ:</p>
                        <p className='value'>{item.dichvu}</p>
                    </div>
                    <div className="ContentCapsoChitiet-content_description-listLeft_item">
                        <p className='lable'>Số thứ tự:</p>
                        <p className='value'>{item.stt}</p>
                    </div>
                    <div className="ContentCapsoChitiet-content_description-listLeft_item">
                        <p className='lable'>Thời gian cấp:</p>
                        <p className='value'>{item.day}</p>
                    </div>
                    <div className="ContentCapsoChitiet-content_description-listLeft_item">
                        <p className='lable'>Hạn sử dụng:</p>
                        <p className='value'>{item.date}</p>
                    </div>
                </div>
                <div className="ContentCapsoChitiet-content_description-listRight">
                    <div className="ContentCapsoChitiet-content_description-listRight_item">
                        <p className='lable'>Nguồn cấp:</p>
                        <p className='value'>{item.source}</p>
                    </div>
                    <div className="ContentCapsoChitiet-content_description-listRight_item item-Status">
                        <p className='lable'>Trạng thái:</p>
                        {
                            item.status === 0 ?
                                <div key={item.key}
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
                                item.status === 1 ?
                                    <div key={item.key}
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
                    </div>
                    <div className="ContentCapsoChitiet-content_description-listRight_item">
                        <p className='lable'>Số điện thoại:</p>
                        <p className='value'>{user.sdt}</p>
                    </div>
                    <div className="ContentCapsoChitiet-content_description-listRight_item">
                        <p className='lable'>Địa chỉ email:</p>
                        <p className='value'>{user.email}</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="ContentCapsoChitiet">

            <div className="ContentCapsoChitiet-content">
                <h2>Quản lý cấp số</h2>
                {renderItem}
            </div>


        </div>
    )
}

export default ContentCapsoChitiet