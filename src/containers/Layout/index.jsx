import React from 'react'

import Header from '@components/Header'
import Footer from '@components/Footer'

import styles from './styles.module.scss'

function Layout({children}) {
  return (
    <div className={styles.Main}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout