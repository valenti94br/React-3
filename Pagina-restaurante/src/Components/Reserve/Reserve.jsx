
import React from 'react';

class Reserve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('reservation', JSON.stringify(this.state));
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Fecha de reserva:
            <input
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
              required
            />
          </label>
          <input type="submit" value="Reservar" />
        </form>
      </div>
    );
  }
}

export default Reserve;
