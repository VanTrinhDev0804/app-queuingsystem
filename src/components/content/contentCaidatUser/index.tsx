import React, { useState } from 'react'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import { IControlPage } from 'types'
import ControllUser from './controll'
import TableTaiKhoan from './tableTaiKhoan'
import ContentThemTaiKhoan from './themTaiKhoan'
import ContentCapNhatTaiKhoan from './capnhat'
import './styles.scss'

const ContentCaidatUser: React.FC<IControlPage> = (props) => {

    const { Content } = Layout
    const { controller } = props




    return (
        <Content>
            {
                controller === 'themtaikhoan' || controller === 'capnhat' ? "" :
                    <div className="btn-ThietbiNew">
                        <Link to="/caidat-user/themtaikhoan">
                            <div className="btn-ThietbiNew-content">
                                <img src={require('../../../assets/icon/capso/add.png')} />
                                <p>Thêm tài khoản</p>
                            </div>
                        </Link>

                    </div>
            }

            {controller === 'themtaikhoan' ? <ContentThemTaiKhoan/> :
                    controller === 'capnhat' ? <ContentCapNhatTaiKhoan/> :
                        <>

                            <div className="ContentCapso">
                                {/* {controller} */}
                                <ControllUser />
                                {/* Table */}
                                <TableTaiKhoan />
                            </div>
                        </>

            }










        </Content>
    )
}



export default ContentCaidatUser