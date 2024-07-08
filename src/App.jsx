import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { data } from './data';

import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // verilen itemi sepete ekle
  };

  return (
    <div className="App">
      <Navigation cart={cart} />
      <main className="content">
        <Route exact path="/">
          <Products products={products} addItem={addItem} />
        </Route>
        <Route path="/cart">
          <ShoppingCart cart={cart} />
        </Route>
      </main>
    </div>
  );
}

export default App;
