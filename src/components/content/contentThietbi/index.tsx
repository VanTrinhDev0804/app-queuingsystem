import React, { useState } from 'react'
import { Layout, Button, Select } from 'antd'
import ContentCapSoMoi from './thietbimoi'
import TableThietbi from './tableThietbi'
import ControllThietbi from './controll'

import ContentThietbiMoi from './thietbimoi'
import { Link } from 'react-router-dom'
import { IControlPage } from 'types'
import ContentThietbiChiTiet from './chitiet'


import './styles.scss'
import ContentCapNhatThietbi from './capnhat'

const ContentThietbi: React.FC<IControlPage> = (props) => {
    
    const { Content } = Layout
    
    const pathBtn = props.controller ==='chitiet' ? '/thietbi/capnhat':'/thietbi/themthietbi' 
    const nameBtn = props.controller ==='chitiet' ?  'Cập nhật thiết bị': 'Thêm thiết bị' 


    return (
        <Content>
            {
                props.controller === 'themthietbi' || props.controller === 'capnhat' ? "" :
                    <div className="btn-ThietbiNew">
                        <Link to={`${pathBtn}`}>
                            <div className="btn-ThietbiNew-content">
                                <img src={require('../../../assets/icon/capso/add.png')} />
                                <p>{nameBtn}</p>
                            </div>
                        </Link>

                    </div>
            }

            {props.controller === 'themthietbi' ? <ContentThietbiMoi /> :
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



export default ContentThietbi