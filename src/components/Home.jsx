import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css';
import pizzasData from '../assets/pizzas.json';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    setPizzas(pizzasData);
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Pizzería Mamma Mia!</h1>
        <div className="header-right">$ 134.640</div>
      </header>
      <div className="banner">
      <img src="https://th.bing.com/th/id/OIP.WZzAMKDjzhhyAf9D2dhpEQHaE7?rs=1&pid=ImgDetMain" alt="Pizzería Mamma Mia Banner" />
        <h2>¡Tenemos las mejores pizzas que podrás encontrar!</h2>
      </div>
      <h1>Catálogo de Pizzas</h1>
      <div className="grid">
        {pizzas.map(pizza => (
          <div key={pizza.id} className="card">
            <img src={pizza.img} alt={pizza.name} />
            <div className="card-content">
              <h2>{pizza.name}</h2>
              <p>Ingredientes: {pizza.ingredients.join(', ')}</p>
              <div className="price">${pizza.price}</div>
              <div className="btn-container">
                <Link to={`/pizza/${pizza.id}`} className="btn">Ver Más</Link>
                <button className="btn btn-add">Añadir</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

