// cartReducer.js
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Logic for adding an item to the cart
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_FROM_CART':
      // Logic for removing an item from the cart
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
        
      };
    // Add more cases for other cart actions, like updating quantities
    case 'CHANGE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.itemId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
