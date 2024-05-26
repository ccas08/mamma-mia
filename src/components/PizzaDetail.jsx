import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from './CartContext';
import '../assets/css/styles.css';
import pizzasData from '../assets/pizzas.json';

const PizzaDetail = () => {
  const { id } = useParams();
  console.log('addToCart from context:', CartContext);
  const { addToCart } = useContext(CartContext); // Asegúrate de que CartContext está importado correctamente
  
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const selectedPizza = pizzasData.find(p => p.id === id);
    setPizza(selectedPizza);
  }, [id]);

  if (!pizza) return <div>Loading...</div>;

  return (
    <div className="container">
      <header>
        <h1>Pizzería Mamma Mia!</h1>
        <div className="header-right">$ 134.640</div>
      </header>
      <div className="banner">
        <img src={pizza.img} alt={pizza.name} />
      </div>
      <div className="pizza-detail">
        <h2>{pizza.name}</h2>
        <p>{pizza.desc}</p>
        <h3>Ingredientes:</h3>
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Precio: ${pizza.price}</h3>
        <button className="btn btn-add" onClick={() => addToCart(pizza)}>Añadir al Carrito</button>
      </div>
    </div>
  );
};

export default PizzaDetail;




