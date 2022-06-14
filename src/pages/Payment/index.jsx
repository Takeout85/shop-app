import React from 'react'

import styles from './styles.module.scss'

function Payment() {
  return (
    <div className={styles.Payment}>
      <div className={styles.Payment__content}>
        <h3>Resumen del pedido:</h3>
        <div className={styles.Payment__button}>Boton de pago con Paypal</div>
      </div>
      <div></div>
    </div>
  )
}

export default Payment