import React, { useReducer } from 'react';
import CartContext from './CartContext';

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItem;
    let updatedItems;
    let updatedTotalAmount;

    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
      updatedTotalAmount = state.totalAmount + action.item.price;
    } else {
      if (!action.item.quantity) {
        action.item.quantity = 1;
      }
      updatedItems = state.items.concat(action.item);
      updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.quantity;
    }
    console.log(updatedItems);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);
  const addItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
    // console.log(item);
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
