
import React from 'react';

const dishes = [
  {
    id: 1,
    name: 'plato 1',
    description: 'Este es el plato 1',
    price: 10,
  },
  {
    id: 2,
    name: 'plato 2',
    description: 'Este es el plato 2',
    price: 20,
  },
  {
    id: 3,
    name: 'plato 3',
    description: 'Este es el plato 3',
    price: 15,
  },
];

function Carta() {
  return (
    <div>
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
  );
}

export default Carta;
