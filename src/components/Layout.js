import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Article from './Article'
import Aside from './Aside'

import '../styles/Layout.scss'

const Layout = () => {
  return (
    <div className='contentApp'>
      <Header />
        <div className='content'>
          <Article />
          <Aside />
        </div>
      <Footer/>
    </div>
  )
}

export default Layout