import React, { useState } from 'react'
import { Layout } from 'antd'
import ControllThietbi from './controll'
import { Link } from 'react-router-dom'
import { IControlPage } from 'types'
import ContentThemVaitro from './themVaitro'
import TableVaitro from './tableVaitro'
import ContentCapnhatVaitro from './capnhat'
import './styles.scss'


const ContentCaidat: React.FC<IControlPage> = (props) => {

    const { Content } = Layout
    const { controller } = props




    return (
        <Content>
            {
                controller === 'themvaitro' || controller === 'capnhat' ? "" :
                    <div className="btn-ThietbiNew">
                        <Link to="/caidat-hethong/themvaitro">
                            <div className="btn-ThietbiNew-content">
                                <img src={require('../../../assets/icon/capso/add.png')} />
                                <p>Thêm vai trò</p>
                            </div>
                        </Link>

                    </div>
            }

            {controller === 'themvaitro' ? <ContentThemVaitro /> :
                    controller === 'capnhat' ? <ContentCapnhatVaitro /> :
                        <>

                            <div className="ContentCapso">
                                {/* {controller} */}
                                <ControllThietbi />
                                {/* Table */}
                                <TableVaitro />
                            </div>
                        </>

            }










        </Content>
    )
}



export default ContentCaidat