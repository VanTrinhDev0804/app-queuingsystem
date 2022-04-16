import React, { useState } from 'react'
import { Layout } from 'antd';
import './styles.scss'
import MenuSider from '../../menubar';
import HeaderPages from '../../header';
import { routesBaocao } from './routes';



const BaocaoComponent = () => {
  return (
    <Layout className='Baocao'>
      <MenuSider />
      <Layout>
        {/* Header */}
        <HeaderPages listTitle={routesBaocao}/>

        {/* content */}

  
      </Layout>
    </Layout>
  )
}

export default BaocaoComponent