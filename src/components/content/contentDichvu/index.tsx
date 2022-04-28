import React, { useState, useEffect } from 'react'
import { Layout} from 'antd'
import TableThietbi from './tableDichvu'
import ControllThietbi from './controll'
import ContentThietbiMoi from './themDichvu'
import { Link, useParams } from 'react-router-dom'
import { IControlPage, IParams } from 'types'
import ContentThietbiChiTiet from './chitiet'
import ContentCapNhatThietbi from './capnhat'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../firebase/cofig'
import { addItemsTBDichvu } from 'redux/slice/DichvuSlice'
import './styles.scss'
import TableDichvu from './tableDichvu'


const ContentDichvu: React.FC<IControlPage> = (props) => {

    const { Content } = Layout
    const { controller } = props
    const {id} : IParams = useParams()
    const pathBtn = controller === 'chitiet' ? `/dichvu/capnhat/${id}` : '/dichvu/themdichvu'
    const nameBtn = controller === 'chitiet' ? 'Cập nhật dịch vụ' : 'Thêm dịch vụ'



    const {data} = useAppSelector(state =>state.dichvu)
    const dispatch = useAppDispatch()
    const dataCollectionRef = collection(db, 'Dichvu')
    const result: any = []
    useEffect(() => {
        const getData = async () => {
            const querySnapshot = await getDocs(dataCollectionRef)      
            querySnapshot.forEach((doc) => {
                let item = doc.data()
                result.push({ ...item })
            })
            dispatch(addItemsTBDichvu(result))
        }
        getData()
    }, []);
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
                                <TableDichvu data={data} />
                            </div>
                        </>





            }

        </Content>
    )
}



export default ContentDichvu