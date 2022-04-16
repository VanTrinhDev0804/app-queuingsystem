import React, { useState } from 'react'
import { Layout } from 'antd';
import './styles.scss'
import MenuSider from '../../menubar';
import HeaderPages from '../../header';
import ContentCapso from 'components/content/contentCapso';
import TitleDefault from 'components/titledefault';
import { useParams } from 'react-router-dom';
import { IBread, IParams } from 'types';
import { routesCapso } from './routes';


const CapsoComponent = () => {
  const {  control }: IParams = useParams();

  return (
    <Layout className='Capso' >
      <MenuSider />
      <Layout>
        {/* Header */}
        <HeaderPages listTitle={routesCapso} />

        {/* content */}
        <TitleDefault text="Quản lý cấp số" />

        <ContentCapso controller={`${control}`} />

      </Layout>
    </Layout>
  )
}

export default CapsoComponent