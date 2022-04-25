import React, { useState } from 'react'
import {  useParams } from 'react-router-dom'
import {  useAppSelector } from 'redux/hooks'
import { IParams } from 'types'
import './styles.scss'


const ContentThietbiChiTiet = () => {

    const { id }: IParams = useParams();
    const { data } = useAppSelector(state => state.thietbi)

    const itemID = data?.filter((item) => {
        return `${item.key}` === id
    })

    const showData = itemID.map((item, index) => {
            let textDichvu = ''
            let l = item.dichvu?.length ? item.dichvu?.length : 0
            for(let i = 0 ;i <l;i++){
                textDichvu += `${item.dichvu?.[i]} ,`
            }
        return (
            <>
                <div className="ContentThietbiChitiet-content_description">

                    <div className="ContentThietbiChitiet-content_description-listLeft">
                        <div className="ContentThietbiChitiet-content_description-listLeft_item">
                            <p className='lable'>Mã thiết bị:</p>
                            <p className='value'>{item.maTB}</p>
                        </div>
                        <div className="ContentThietbiChitiet-content_description-listLeft_item">
                            <p className='lable'>Tên thiết bị:</p>
                            <p className='value'>{item.nameTB}</p>
                        </div>
                        <div className="ContentThietbiChitiet-content_description-listLeft_item">
                            <p className='lable'>Địa chỉ IP :</p>
                            <p className='value'>{item.diachiIP}</p>
                        </div>
                    </div>
                    <div className="ContentThietbiChitiet-content_description-listRight">
                        <div className="ContentThietbiChitiet-content_description-listRight_item">
                            <p className='lable'>Loai thiết bị:</p>
                            <p className='value'>{item.loaiTb}</p>
                        </div>
                        <div className="ContentThietbiChitiet-content_description-listRight_item">
                            <p className='lable'>Tên đăng nhập:</p>
                            <p className='value'>Lequynhaivan01</p>
                        </div>
                        <div className="ContentThietbiChitiet-content_description-listRight_item">
                            <p className='lable'>Mật khẩu :</p>
                            <p className='value'>311940211</p>
                        </div>
                    </div>
                </div>
                <div className="ContentThietbiChitiet-content_Dichvu">
                    <p className='lable'>Dịch vụ sử dụng:</p>
                    <p className='value'>{textDichvu.slice(0, textDichvu.lastIndexOf(','))}</p>
                </div>
            </>
        )
    })




    return (
        <div className="ContentThietbiChitiet">

            <div className="ContentThietbiChitiet-content">
                <h2>Thông tin thiết bị</h2>
                {showData}
            </div>

        </div>
    )
}

export default ContentThietbiChiTiet