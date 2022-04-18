import React, { useState } from 'react'
import { Layout, Button, Select } from 'antd'
import ContentCapSoMoi from './themDichvu'
import TableThietbi from './tableDichvu'
import ControllThietbi from './controll'

import ContentThietbiMoi from './themDichvu'
import { Link } from 'react-router-dom'
import { IControlPage } from 'types'
import ContentThietbiChiTiet from './chitiet'


import './styles.scss'
import ContentCapNhatThietbi from './capnhat'

const ContentDichvu: React.FC<IControlPage> = (props) => {

    const { Content } = Layout
    const { controller } = props
    const pathBtn = controller === 'chitiet' ? '/dichvu/capnhat' : '/dichvu/themdichvu'
    const nameBtn = controller === 'chitiet' ? 'Cập nhật dịch vụ' : 'Thêm dịch vụ'


    return (
        <Content>
            {
                controller === 'themdichvu' || controller === 'capnhat' ? "" :
                    <div className="btngroup">
                        <div className="btn-Dichvu">
                            <Link to={`${pathBtn}`}>
                                <div className="btn-Dichvu-content">
                                    <img src={require('../../../assets/icon/capso/add.png')} />
                                    <p>{nameBtn}</p>
                                </div>
                            </Link>

                        </div>
                        {
                            controller == 'chitiet' ?
                                <div className="btn-Dichvu">
                                    <Link to={'/dichvu'}>
                                        <div className="btn-Dichvu-content">
                                            <img src={require('../../../assets/icon/capso/back.png')} />
                                            <p>Quay lại</p>
                                        </div>
                                    </Link>

                                </div>
                                : ""

                        }

                    </div>


            }


            {controller === 'themdichvu' ? <ContentThietbiMoi /> :
                controller === 'chitiet' ? <ContentThietbiChiTiet /> :
                    controller === 'capnhat' ? <ContentCapNhatThietbi /> :
                        <>

                            <div className="ContentCapso">
                                {/* {controller} */}
                                <ControllThietbi />
                                {/* Table */}
                                <TableThietbi />
                            </div>
                        </>





            }

        </Content>
    )
}



export default ContentDichvu