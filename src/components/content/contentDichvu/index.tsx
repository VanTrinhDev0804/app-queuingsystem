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

    const pathBtn = props.controller === 'chitiet' ? '/dichvu/capnhat' : '/dichvu/themdichvu'
    const nameBtn = props.controller === 'chitiet' ? 'Cập nhật thiết bị' : 'Thêm dịch vụ'


    return (
        <Content>
            {
                props.controller === 'themdichvu' || props.controller === 'capnhat' ? "" :
                    <div className="btn-ThietbiNew">
                        <Link to={`${pathBtn}`}>
                            <div className="btn-ThietbiNew-content">
                                <img src={require('../../../assets/icon/capso/add.png')} />
                                <p>{nameBtn}</p>
                            </div>
                        </Link>

                    </div>
            }

            {props.controller === 'themdichvu' ? <ContentThietbiMoi /> :
                props.controller === 'chitiet' ? <ContentThietbiChiTiet /> :
                    props.controller === 'capnhat' ? <ContentCapNhatThietbi /> :
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