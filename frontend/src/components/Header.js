import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './header.module.scss';

const Header = () => {

  return (
    <header className={styles.header}>
      <p>Costumer Management App</p>
      <div className={styles.links}>
        <NavLink to="/" className={styles.link} activeClassName={styles.active} exact>
          Lista de Clientes
        </NavLink>
        <NavLink to="/add" className={styles.link} activeClassName={styles.active}>
          Adicionar Cliente
        </NavLink>
      </div>
    </header>
  );
};

export default Header;