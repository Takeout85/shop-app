import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

function Hearder() {
  return (
    <div className={styles.Header}>
      <h1 className={styles.Header__title}>
        <Link to='/'>
          PlatziConf Merch
        </Link>
      </h1>
      <div className={styles.Header__checkout}>
        <Link to='/shop-app/checkout'>
          <i className="fas fa-shopping-basket" title="Checkout" />
        </Link>
      </div>
    </div>
  )
}

export default Hearder