import React from 'react'

import styles from './styles.module.scss'

function Footer() {
  return (
    <div className={styles.Footer}>
      <p className={styles.Footer__title}>Platzi Conf Merch</p>
      <p className={styles.Footer__copy}>Todos los Derechos Reservados</p>
    </div>
  )
}

export default Footer