import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CarWidgetComponente.css'; 

const CartWidgetComponente = () => {
  const itemCount = 3; // Número hardcodeado

  return (
    <div className="cart-widget">
    <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
    <div className="notification">
      {itemCount}
    </div>
  </div>
  );
};

export default CartWidgetComponente;
