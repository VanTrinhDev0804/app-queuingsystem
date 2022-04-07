import React, { useState } from 'react'
import { Layout } from 'antd';
import './styles.scss'
import MenuSider from '../../menubar';
import HeaderPages from '../../header';
import FormProfile from '../../profile';



const HomeComponent = () => {
  return (
    <Layout >
      <MenuSider />
      <Layout>
        {/* Header */}
        <HeaderPages/>

        {/* content */}

        <FormProfile />
      </Layout>
    </Layout>
  )
}

export default HomeComponent