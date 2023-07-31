import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

const cartInicial = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(cartInicial);

  const addItem = (item, quantity, size) => {
    const newCart = [...cart];
    const isInCart = newCart.find((remera) => remera.id === item.id);

    //se desestructura el objeto antes de agregarlo a cart para quitar
    //propiedades no requeridas
    const { stock, description, ...itemToAdd } = item;

    const addedItem = { ...itemToAdd, quantity, size };

    if (isInCart) {
      if (isInCart.size === size) {
        isInCart.quantity += quantity;
      } else {
        newCart.push(addedItem);
      }
    } else {
      newCart.push(addedItem);
    }
    setCart(newCart);
  };

  const itemsInCart = () => {
    return cart.reduce((acc, rem) => acc + rem.quantity, 0);
  };

  const total = () => {
    return cart.reduce((acc, rem) => acc + rem.price * rem.quantity, 0);
  };
  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        itemsInCart,
        total,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
