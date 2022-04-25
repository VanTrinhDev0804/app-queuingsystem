import React, { useState, useEffect } from 'react'
import { Layout, Button, Select } from 'antd'
import ContentCapSoMoi from './thietbimoi'
import TableThietbi from './tableThietbi'
import ControllThietbi from './controll'
import ContentThietbiMoi from './thietbimoi'
import { Link, useParams } from 'react-router-dom'
import { IControlPage, IParams } from 'types'
import ContentThietbiChiTiet from './chitiet'
import ContentCapNhatThietbi from './capnhat'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../firebase/cofig'
import { addItemsTBThietbi } from 'redux/slice/ThietbiSlice'
import './styles.scss'




const ContentThietbi: React.FC<IControlPage> = (props) => {

    const { Content } = Layout
    const { id }: IParams = useParams();
    const pathBtn = props.controller === 'chitiet' ? `/thietbi/capnhat/${id}` : '/thietbi/themthietbi'
    const nameBtn = props.controller === 'chitiet' ? 'Cập nhật thiết bị' : 'Thêm thiết bị'


    const { data } = useAppSelector(state => state.thietbi)
    const dispatch = useAppDispatch()

    const dataCollectionRef = collection(db, 'Thietbi')
    const result: any = []
    useEffect(() => {
        const getDataThietBi = async () => {
            const querySnapshot = await getDocs(dataCollectionRef)
            querySnapshot.forEach((doc) => {
                let item = doc.data()
                result.push({ ...item })
            })
            dispatch(addItemsTBThietbi(result))
        }
        getDataThietBi()
    }, []);


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
                                <TableThietbi data={data} />
                            </div>
                        </>





            }










        </Content>
    )
}



export default ContentThietbi