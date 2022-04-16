import React, { useState } from 'react'
import { Select, Button, Form, Input } from 'antd'
import { Link, Redirect, useHistory } from 'react-router-dom'
import './styles.scss'


const ContentThietbiChiTiet = () => {
    return (
        <div className="ContentThietbiChitiet">

            <div className="ContentThietbiChitiet-content">
                <h2>Thông tin thiết bị</h2>
                <div className="ContentThietbiChitiet-content_description">

                    <div className="ContentThietbiChitiet-content_description-listLeft">
                        <div className="ContentThietbiChitiet-content_description-listLeft_item">
                            <p className='lable'>Mã thiết bị:</p>
                            <p className='value'>KIO_01</p>
                        </div>
                        <div className="ContentThietbiChitiet-content_description-listLeft_item">
                            <p className='lable'>Tên thiết bị:</p>
                            <p className='value'>Kiosk</p>
                        </div>
                        <div className="ContentThietbiChitiet-content_description-listLeft_item">
                            <p className='lable'>Địa chỉ IP :</p>
                            <p className='value'>128.172.308</p>
                        </div>
                    </div>
                    <div className="ContentThietbiChitiet-content_description-listRight">
                        <div className="ContentThietbiChitiet-content_description-listRight_item">
                            <p className='lable'>Loai thiết bị:</p>
                            <p className='value'>Kiosk</p>
                        </div>
                        <div className="ContentThietbiChitiet-content_description-listRight_item">
                            <p className='lable'>Tên đăng nhập:</p>
                            <p className='value'>Linhkyo011 </p>
                        </div>
                        <div className="ContentThietbiChitiet-content_description-listRight_item">
                            <p className='lable'>Mật khẩu :</p>
                            <p className='value'>CMS</p>
                        </div>
                    </div>
                </div>
                <div className="ContentThietbiChitiet-content_Dichvu">
                    <p className='lable'>Dịch vụ sử dụng:</p>
                    <p className='value'>Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.</p>
                </div>

            </div>


        </div>
    )
}

export default ContentThietbiChiTiet