import { TYPES } from '../actions/cartActions';

export const cartInitialState = {
 products: [],
 cart: [],
};

export function cartReducer(state, action) {
 switch (action.type) {
  case TYPES.ADD_TO_CART: {
   const newItem = state.products.find(
    (product) => product.id_product === action.payload
   );
   const itemInCart = state.cart.find(
    (item) => item.id_product === newItem.id_product
   );

   return itemInCart
    ? {
       ...state,
       cart: state.cart.map((item) =>
        item.id_product === newItem.id_product
         ? { ...item, quantity: item.quantity + 1 }
         : item
       ),
      }
    : {
       ...state,
       cart: [...state.cart, { ...newItem, quantity: 1 }],
      };
  }

  case TYPES.REMOVE_ONE_FROM_CART: {
   const itemToDelete = state.cart.find(
    (item) => item.id_product === action.payload
   );

   return itemToDelete.quantity > 1
    ? {
       ...state,
       cart: state.cart.map((item) =>
        item.id_product === action.payload
         ? { ...item, quantity: item.quantity - 1 }
         : item
       ),
      }
    : {
       ...state,
       cart: state.cart.filter((item) => item.id_product !== action.payload),
      };
  }
  case TYPES.REMOVE_ALL_FROM_CART:
   return {
    ...state,
    cart: state.cart.filter((item) => item.id_product !== action.payload),
   };
  case TYPES.CLEAR_CART:
   return { ...state, cart: cartInitialState.cart };

  case TYPES.GET_PRODUCTS:
   return {
    ...state,
    products: action.payload,
   };

  default:
   return state;
 }
}
