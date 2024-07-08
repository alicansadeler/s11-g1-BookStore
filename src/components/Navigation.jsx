import React from 'react';
import { NavLink } from 'react-router-dom';
import { ScNav } from './scParts';

const Navigation = (props) => {
  return (
    <ScNav>
      <nav className="content">
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">
          Cart <span>{props.cart.length}</span>
        </NavLink>
      </nav>
    </ScNav>
  );
};

export default Navigation;
