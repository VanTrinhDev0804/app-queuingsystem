import React, { useState } from 'react'
import { Layout } from 'antd';
import MenuSider from '../../menubar';
import HeaderPages from '../../header';
import { routesCaidatTK } from './routes';
import TitleDefault from 'components/titledefault';
import { useParams } from 'react-router-dom';
import { IParams } from 'types';
import ContentCaidatUser from 'components/content/contentCaidatUser';
import './styles.scss'


const CaidatUserComponent = () => {

  const { control }: IParams = useParams()
  const textTitelDefault = control ? 'Quản lý tài khoản' : "Danh sách tài khoản"
  return (
    <Layout className='Caidat'>
      <MenuSider />
      <Layout>
        {/* Header */}
        <HeaderPages listTitle={routesCaidatTK} />


        <TitleDefault text={textTitelDefault} />
        {/* content */}
        <ContentCaidatUser controller={`${control}`} />
      </Layout>
    </Layout>
  )
}

export default CaidatUserComponent