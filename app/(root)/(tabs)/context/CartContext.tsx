import React, { createContext, useContext, useState } from "react";
import { Alert } from "react-native";

interface Product {
  id: string;
  name: string;
  price: string;
  image: any;
}

interface CartContextType {
  cart: Product[];
  addToCart: (item: Product) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (item: Product) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item is already in the cart, show an alert
      Alert.alert("Already in Cart", "This item is already in your cart.");
    } else {
      // If the item is not in the cart, add it
      setCart((prevCart) => [...prevCart, item]);
      Alert.alert("Success", "One item added to Cart");
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
