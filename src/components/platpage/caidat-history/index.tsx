import React, { useState } from 'react'
import { Layout } from 'antd';
import MenuSider from '../../menubar';
import HeaderPages from '../../header';
import { routesCaidatHs } from './routes';
import { useParams } from 'react-router-dom';
import { IParams } from 'types';
import ContentCaidatHistory from 'components/content/contentCaidatHitory';
import './styles.scss'



const CaidatHistoryComponent = () => {

  const {control}: IParams = useParams() 
  return (
    <Layout className='Caidat'>
      <MenuSider />
      <Layout>
        {/* Header */}
        <HeaderPages listTitle={routesCaidatHs} />
        {/* content */}
        <ContentCaidatHistory controller={`${control}`}/>
      </Layout>
    </Layout>
  )
}

export default CaidatHistoryComponent