import React, { createContext, useReducer, useContext } from 'react';
import "./style.css"; // ✅ Import CSS
// Initial cart state
const initialState = {
  cartItems: [],
};

const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingItem = state.cartItems.find(item => item.id === action.payload.id);
        if (existingItem) {
          return {
            ...state,
            cartItems: state.cartItems.map(item =>
              item.id === action.payload.id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, { 
              ...action.payload, 
              quantity: 1, 
              price: action.payload.price || 0  // ✅ Ensure price is stored
            }],
          };
        }
  
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload),
        };
  
      default:
        return state;
    }
  };
  
// Create Context
const CartContext = createContext();

// Cart Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = item => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = id => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};
