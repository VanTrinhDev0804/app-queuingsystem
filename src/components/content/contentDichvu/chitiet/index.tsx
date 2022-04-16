import React, { useState } from 'react'
import { Select, Button, Form, Input } from 'antd'
import { Link, Redirect, useHistory } from 'react-router-dom'
import './styles.scss'


const ContentChiTietDichvu = () => {
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
                    <p className='lable'>Dịch vụ sử dụng:</p>
                    <p className='value'>Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.</p>
                </div>
        
            </div>


        </div>
    )
}

export default ContentChiTietDichvu