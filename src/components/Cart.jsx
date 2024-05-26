import React, { useContext } from 'react';
import CartContext from './CartContext';
import '../assets/css/styles.css';


const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container">
      <h1>Carrito</h1>
      {cart.length === 0 ? (
        <p>No hay pizzas en el carrito</p>
      ) : (
        cart.map(pizza => (
          <div key={pizza.id} className="cart-item">
            <h2>{pizza.name}</h2>
            <p>Precio: ${pizza.price}</p>
            <button className="btn" onClick={() => removeFromCart(pizza.id)}>Eliminar</button>
          </div>
        ))
      )}
      <div className="cart-total">
        Total: ${cart.reduce((acc, pizza) => acc + pizza.price, 0)}
      </div>
    </div>
  );
};

export default Cart;


