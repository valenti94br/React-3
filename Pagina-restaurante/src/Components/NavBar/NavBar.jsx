import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'skyblue' }}>
      <div className="container">
        <Link className="navbar-brand text-dark" to="/">
          Restaurante
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/" activeClassName="active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/reserve" activeClassName="active">
                Reservar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/carta" activeClassName="active">
                Carta
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
