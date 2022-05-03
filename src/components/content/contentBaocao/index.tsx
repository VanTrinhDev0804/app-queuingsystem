import React, { useEffect, useState } from 'react'
import { Layout, Button, Select } from 'antd'
import { IControlPage, IParams } from 'types'
import './styles.scss'
import ControllBaocao from './controll'
import TableBaocao from './tableBaocao'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../firebase/cofig'
import { addItemsTBCapso } from 'redux/slice/CapsoSlice'

const ContentBaocao: React.FC<IControlPage> = (props) => {
    const { Content } = Layout


    const { data } = useAppSelector(state => state.capso)

    const dispatch = useAppDispatch()
    const dataCollectionRef = collection(db, 'Capso');
    const result: any = []

    useEffect(() => {
        const getData = async () => {
            const querySnapshot = await getDocs(dataCollectionRef)
            querySnapshot.forEach((doc) => {
                let item = doc.data()
                result.push({ ...item })
            })
            dispatch(addItemsTBCapso(result))
        }
        getData()
    }, []);
    return (
        <Content>

            <div className="btn-Dowload">
              
                    <div className="btn-Dowload-content">
                        <img src={require('../../../assets/icon/baocao/documentload.png')} />
                        <p>Tải về</p>
                    </div>
        

            </div>



            <div className="ContentCapso">
                {/* {controller} */}
                <ControllBaocao/>

                {/* Table */}
                <TableBaocao data={data}/>
            </div>











        </Content>
    )
}

export default ContentBaocao