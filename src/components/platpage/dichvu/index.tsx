import React, { useState } from 'react'
import { Layout } from 'antd';
import './styles.scss'
import MenuSider from '../../menubar';
import HeaderPages from '../../header';
import { routesDichvu } from './routes';
import ContentDichvu from 'components/content/contentDichvu';
import { useParams } from 'react-router-dom';
import { IParams } from 'types';
import TitleDefault from 'components/titledefault';




const DichvuComponent = () => {
  const {control} :IParams = useParams();

  return (
    <Layout className='Dichvu'>
      <MenuSider />
      <Layout>
        {/* Header */}
        <HeaderPages  listTitle={routesDichvu}/>

        {/* content */}
        <TitleDefault text='Quản lý dịch vụ'/>
        <ContentDichvu controller={`${control}`}/>
      </Layout>
    </Layout>
  )
}

export default DichvuComponent