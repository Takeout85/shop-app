import React from 'react'
import Product from '@components/Product';

import styles from './styles.module.scss'

function Products({ products }) {
  return (
    <div className={styles.Products}>
      <div className={styles.Products__items}>
        {
          products.map(product => (
            <Product key={product.id} product={product}/>
          ))
        }
      </div>
    </div>
  )
}

export default Products