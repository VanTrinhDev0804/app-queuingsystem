import React, { useState } from 'react'
import { Layout } from 'antd';
import './styles.scss'
import MenuSider from '../../menubar';
import HeaderPages from '../../header';



const BaocaoComponent = () => {
  return (
    <Layout >
      <MenuSider />
      <Layout>
        {/* Header */}
        <HeaderPages  title='Báo cáo'/>

        {/* content */}

  
      </Layout>
    </Layout>
  )
}

export default BaocaoComponent