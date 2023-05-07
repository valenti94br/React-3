// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/reserve">Reservar</Link>
        </li>
        <li>
          <Link to="/carta">Carta</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
