import React, { useState } from 'react'
import { Layout } from 'antd';
import './styles.scss'
import MenuSider from '../../menubar';
import HeaderPages from '../../header';
import { routesCaidat } from './routes';



const CaidatComponent = () => {
  return (
    <Layout className='Caidat'>
      <MenuSider />
      <Layout>
        {/* Header */}
        <HeaderPages listTitle={routesCaidat}/>

        {/* content */}

      </Layout>
    </Layout>
  )
}

export default CaidatComponent