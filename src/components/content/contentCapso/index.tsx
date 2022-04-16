import React, { useState } from 'react'
import { Layout, Button, Select } from 'antd'
import TableCapSo from './tableCapso'
import ControllCapSo from './controll'
import { Link, useParams } from 'react-router-dom'
import ContentCapSoMoi from './capsomoi'
import { IControlPage, IParams } from 'types'



import './styles.scss'

const ContentCapso :React.FC<IControlPage> = ( props) => {
    const { Content } = Layout


    return (
        <Content>
            {
                props.controller === 'capsomoi' ? "" :
                    <div className="btn-CapsoNew">
                        <Link to={'/capso/capsomoi'}>
                            <div className="btn-CapsoNew-content">
                                <img src={require('../../../assets/icon/capso/add.png')} />
                                <p>Cấp số mới</p>
                            </div>
                        </Link>

                    </div>
            }

            { props.controller === 'capsomoi' ? <ContentCapSoMoi /> :
                <>

                    <div className="ContentCapso">
                        {/* {controller} */}
                        <ControllCapSo />
                        {/* Table */}
                        <TableCapSo />
                    </div>
                </>


            }








        </Content>
    )
}

export default ContentCapso