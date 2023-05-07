import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Reserve() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'date') {
      setDate(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit ejecutado'); //Confirmación
    localStorage.setItem('reservation', JSON.stringify({ name, date }));
    navigate('/');
  };

  return (
    <div className="bg-dark text-white min-vh-100 d-flex align-items-center justify-content-center">
      <form onSubmit={handleSubmit} id="reserveForm" className="d-flex flex-column align-items-center">
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Fecha de reserva:
          <input
            type="date"
            name="date"
            value={date}
            onChange={handleChange}
            required
          />
        </label>
        <input type="submit" value="Reservar" form="reserveForm" className="btn btn-primary mt-3" />
      </form>
    </div>
  );
}

export default Reserve;
