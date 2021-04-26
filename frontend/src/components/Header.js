import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <p>Costumer Management App</p>

      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Lista de Clientes
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Adicionar Cliente
        </NavLink>
      </div>
    </header>
  );
};

export default Header;