import React, { useState } from 'react'
import { Layout } from 'antd';

import MenuSider from '../../menubar';
import HeaderPages from '../../header';
import ContentThietbi from 'components/content/contentThietbi';
import TitleDefault from 'components/titledefault';
import { useParams } from 'react-router-dom';
import { IParams } from 'types';
import { routesThietbi } from './routes';
import './styles.scss'



const ThietbiComponent = () => {

  const { control }: IParams = useParams();
  const textTitle = control? 'Quản lý thiết bị': 'Danh Sách thiết bị' 
  return (
    <Layout className='Thietbi'>
      <MenuSider />
      <Layout>
        {/* Header */}
        <HeaderPages listTitle={routesThietbi} />

        {/* content */}
        <TitleDefault text={textTitle}/>

        <ContentThietbi controller={`${control}`} />


      </Layout>
    </Layout>
  )
}

export default ThietbiComponent