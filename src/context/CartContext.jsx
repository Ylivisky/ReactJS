import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext([]);

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item, quantity) => {
        setCartItems((prevItems) => {
            const itemExists = prevItems.find((cartItem) => cartItem.id === item.id);
    
            if (itemExists) {
                return prevItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + quantity }
                        : cartItem
                );
            } else {
                return [...prevItems, { ...item, quantity }];
            }
        });
    };    

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const decreaseItemQuantity = (id, quantity) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) => {
                if (item.id === id) {
                    const newQuantity = item.quantity - quantity;
                    return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
                }
                return item;
            }).filter(item => item !== null);
        });
    };
    

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addItem, removeItem, decreaseItemQuantity, clearCart, total, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
