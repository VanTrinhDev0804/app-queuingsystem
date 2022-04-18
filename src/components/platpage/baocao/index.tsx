import React, { useState } from 'react'
import { Layout } from 'antd';
import './styles.scss'
import MenuSider from '../../menubar';
import HeaderPages from '../../header';
import { routesBaocao } from './routes';
import ContentBaocao from 'components/content/contentBaocao';
import { useParams } from 'react-router-dom';
import { IParams } from 'types';



const BaocaoComponent = () => {
  const {control} :IParams = useParams();

  return (
    <Layout className='Baocao'>
      <MenuSider />
      <Layout>
        {/* Header */}
        <HeaderPages listTitle={routesBaocao}/>

        {/* content */}
        <ContentBaocao controller={`${control}`} />
  
      </Layout>
    </Layout>
  )
}

export default BaocaoComponent