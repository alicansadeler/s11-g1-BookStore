import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const a = 111;

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage('s11g1', []);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (id) => {
    const newCart = [...cart];
    const indexToRemove = newCart.findIndex((item) => item.id === id);

    newCart.splice(indexToRemove, 1);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartContext = createContext();
export default CartContextProvider;
