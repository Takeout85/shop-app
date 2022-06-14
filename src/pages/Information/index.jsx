import React from 'react';
import { Link } from 'react-router-dom'

import styles from './styles.module.scss';

function Information() {
  return (
    <div className={styles.Information}>
    <div className={styles.Information__content}>
      <div className={styles.Information__head}>
        <h2>Información de contacto:</h2>
      </div>
      <div className={styles.Information__form}>
        <form action="">
          <input type="text" placeholder="Nombre completo" name="name" />
          <input type="text" placeholder="Correo Electronico" name="email" />
          <input type="text" placeholder="Direccion" name="addres" />
          <input type="text" placeholder="apto" name="apto" />
          <input type="text" placeholder="Ciudad" name="city" />
          <input type="text" placeholder="Pais" name="country" />
          <input type="text" placeholder="Estado" name="state" />
          <input type="text" placeholder="Codigo postal" name="cp" />
          <input type="text" placeholder="Telefono" name="phone" />
        </form>
      </div>
      <div className={styles.Information__buttons}>
        <div className={styles.Information__back}>Regresar</div>
        <div className={styles.Information__next}>
          <Link to='/shop-app/checkout/payment'>
            pagar
          </Link>
        </div>
      </div>
    </div>
    <div className={styles.Information__sidebar}>
      <h3>Pedido:</h3>
      <div className={styles.Information__item}>
        <div className={styles.Information__element}>
          <h4>ITEM Name</h4>
          <span>$10</span>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Information;
