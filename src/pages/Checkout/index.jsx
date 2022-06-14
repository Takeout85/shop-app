import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

function Checkout() {
  return (
    <div className={styles.Checkout}>
      <div className={styles.Checkout__content}>
        <h3>Lista de pedidos:</h3>
        <div className={styles.Checkout__item}>
          <div className={styles.Checkout__element}>
            <h4>
              Producto 1
            </h4>
            <span>$ 10</span>
          </div>
          <button type='button'>
            <i className={`${styles.fas} fas fa-trash-alt`} title="Eliminar" />
          </button>
        </div>
      </div>
      <div className={styles.Checkout__sidebar}>
        <h3>Precio Total: $10</h3>
        <button type='button'>
        <Link to='/shop-app/checkout/information'>
          Continuar pedido
        </Link>
          </button>
      </div>
    </div>
  )
}

export default Checkout;
