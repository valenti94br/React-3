import React from 'react';

const Header = () => {
  return (
    <header className="container py-3">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="text-light">Mi página personal</h1>
          <p className="text-light">Soy una persona interesada en:</p>
          <ul className="text-light">
            <li>EL NUEVO ZELDA QUE SALE EN 10 DÍAS</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
