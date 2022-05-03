import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import { IControlPage } from 'types'
import ControllUser from './controll'
import TableTaiKhoan from './tableTaiKhoan'
import ContentThemTaiKhoan from './themTaiKhoan'
import ContentCapNhatTaiKhoan from './capnhat'
import './styles.scss'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../firebase/cofig'
import { addListUser } from 'redux/slice/authSlice'

const ContentCaidatUser: React.FC<IControlPage> = (props) => {

    const { Content } = Layout
    const { controller } = props


    const { userList } = useAppSelector(state => state.auth)

    const dispatch = useAppDispatch()
    const dataCollectionRef = collection(db, 'User');
    const result: any = []
    
    useEffect(() => {
        const getData = async () => {
            const querySnapshot = await getDocs(dataCollectionRef)
            querySnapshot.forEach((doc) => {
                let item = doc.data()
                result.push({ ...item })
            })
            dispatch(addListUser(result))
        }
        getData()
    }, []);


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
                                <TableTaiKhoan userList={userList}/>
                            </div>
                        </>

            }










        </Content>
    )
}



export default ContentCaidatUser