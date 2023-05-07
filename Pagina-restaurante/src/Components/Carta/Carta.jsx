import React from 'react';

const dishes = [
  {
    id: 1,
    name: 'Hamburguesa Clásica',
    description: 'Carne, queso, lechuga, tomate y salsa especial',
    price: 10,
  },
  {
    id: 2,
    name: 'Pizza Margherita',
    description: 'Mozzarella, tomate y albahaca',
    price: 20,
  },
  {
    id: 3,
    name: 'Ensalada César',
    description: 'Pollo, lechuga, parmesano y croutones',
    price: 15,
  },
];

function Carta() {
  return (
    <div className="bg-dark text-primary min-vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1>Carta</h1>
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id}>
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <p>Precio: ${dish.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Carta;
