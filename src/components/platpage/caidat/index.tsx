import React, { useState } from 'react'
import { Layout } from 'antd';
import './styles.scss'
import MenuSider from '../../menubar';
import HeaderPages from '../../header';
import { routesCaidat } from './routes';
import TitleDefault from 'components/titledefault';
import ContentCaidat from 'components/content/contentCaidat';
import { useParams } from 'react-router-dom';
import { IParams } from 'types';



const CaidatComponent = () => {

  const {control}: IParams = useParams() 
  return (
    <Layout className='Caidat'>
      <MenuSider />
      <Layout>
        {/* Header */}
        <HeaderPages listTitle={routesCaidat} />


        <TitleDefault text="Danh sách vai trò" />
        {/* content */}
        <ContentCaidat controller={`${control}`}/>
      </Layout>
    </Layout>
  )
}

export default CaidatComponent