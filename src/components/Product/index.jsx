import React from 'react'
import styles from './styles.module.scss'


function Product({product}) {
  return (
    <div className={styles.Products__item}>
      <img src={product.image} alt={product.title} />
      <div className={styles.Product__item__info}>
        <h2>
          {product.title}
          <span>$ {product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type='button'>Comprar</button>
    </div>
  )
}

export default Product