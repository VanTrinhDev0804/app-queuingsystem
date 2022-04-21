import React, { useState, useEffect } from 'react'
import { Layout, Button, Select } from 'antd'
import TableCapSo from './tableCapso'
import ControllCapSo from './controll'
import { Link, useParams } from 'react-router-dom'
import ContentCapSoMoi from './capsomoi'
import { IControlPage, IParams } from 'types'
import { db } from '../../../firebase/cofig'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addItemsTBCapso } from 'redux/slice/CapsoSlice'
import { collection, getDocs } from 'firebase/firestore'

import './styles.scss'
import ContentCapsoChitiet from './chitiet'

const ContentCapso: React.FC<IControlPage> = (props) => {
    const { Content } = Layout
    const { controller } = props

    const { data } = useAppSelector(state => state.capso)
    const dispatch = useAppDispatch()
    const dataCollectionRef = collection(db, 'Capso');
    const result: any = []

    useEffect(() => {
        const getDataCapso = async () => {
            const querySnapshot = await getDocs(dataCollectionRef)
            querySnapshot.forEach((doc) => {
                let item = doc.data()
                result.push({ ...item })
            })
            dispatch(addItemsTBCapso(result))
        }
        getDataCapso()
    }, []);

    return (
        <Content>
            {
                controller === 'capsomoi' || controller === 'chitiet' ? "" :
                    <div className="btn-CapsoNew">
                        <Link to={`/capso/capsomoi`}>
                            <div className="btn-CapsoNew-content">
                                <img src={require('../../../assets/icon/capso/add.png')} />
                                <p>Cấp số mới</p>
                            </div>
                        </Link>

                    </div>
            }
            {
                controller === 'chitiet' ? 
                    <div className="btn-CapsoNew">
                        <Link to={`/capso`}>
                            <div className="btn-CapsoNew-content">
                                <img src={require('../../../assets/icon/capso/back.png')} />
                                <p>Quay lại</p>
                            </div>
                        </Link>

                    </div> : ""
            }

            {controller === 'capsomoi' ? <ContentCapSoMoi /> :
                controller === "chitiet" ? <ContentCapsoChitiet /> :
                    <>

                        <div className="ContentCapso">
                            {/* {controller} */}
                            <ControllCapSo />
                            {/* Table */}
                            <TableCapSo data={data} />
                        </div>
                    </>


            }








        </Content>
    )
}

export default ContentCapso