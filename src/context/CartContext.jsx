import React, { createContext, useContext, useState } from 'react';

// Crear el contexto del carrito
const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item, quantity) => {
        const newItems = Array.from({ length: quantity }, () => ({ ...item, quantity: 1 }));
        setCartItems(prevItems => [...prevItems, ...newItems]);
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addItem, removeItem, clearCart, total, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
