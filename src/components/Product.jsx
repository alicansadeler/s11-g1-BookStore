import React from 'react';
import { ScProduct } from './scParts';

const Product = (props) => {
  return (
    <ScProduct>
      <img src={props.product.image} alt={`${props.product.title} book`} />
      <div className="details">
        <h1 className="title">{props.product.title}</h1>
        <div className="footer">
          <p className="price">${props.product.price}</p>
          <button onClick={() => props.addItem(props.product)}>
            Add to cart
          </button>
        </div>
      </div>
    </ScProduct>
  );
};

export default Product;
