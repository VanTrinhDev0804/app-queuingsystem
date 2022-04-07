import React, { useState } from 'react'
import { Layout } from 'antd';
import './styles.scss'
import MenuSider from '../../menubar';
import HeaderPages from '../../header';




const DichvuComponent = () => {
  return (
    <Layout >
      <MenuSider />
      <Layout>
        {/* Header */}
        <HeaderPages title='Dịch vụ'/>

        {/* content */}

      </Layout>
    </Layout>
  )
}

export default DichvuComponent