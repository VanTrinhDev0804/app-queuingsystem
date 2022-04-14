import React, { useState } from 'react'
import { Layout } from 'antd';
import './styles.scss'
import MenuSider from '../../menubar';
import HeaderPages from '../../header';
import ContentCapso from 'components/content/contentCapso';
import TitleDefault from 'components/titledefault';



const CapsoComponent = () => {

  return (
    <Layout >
      <MenuSider />
      <Layout>
        {/* Header */}
        <HeaderPages title='Cấp số' />

        {/* content */}
        <TitleDefault text="Quản lý cấp số"/>
       
        <ContentCapso />

      </Layout>
    </Layout>
  )
}

export default CapsoComponent