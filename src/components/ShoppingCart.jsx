import React from 'react';
import { ScCartCheckout } from './scParts';

import Item from './ShoppingCartItem';

const ShoppingCart = (props) => {
  const getCartTotal = () => {
    return props.cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div>
      {props.cart.map((item) => (
        <Item key={item.id} {...item} />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;
