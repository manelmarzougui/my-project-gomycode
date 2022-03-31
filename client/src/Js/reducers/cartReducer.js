import {
  ADD_ITEMS,
  ADD_ITEMS_SUCCESS,
  GET_CART,
  GET_CART_SUCCESS,
  CLEAR_ITEMS,
} from '../const/cart'

const initialState = {
  cart: [],
  status: null,
}
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEMS:
      console.log(action.payload)
      return { ...state, status: 'loading' }
    case ADD_ITEMS_SUCCESS:
      return {
        ...state,
        status: 'success',
        cart: [...state.cart, action.payload],
      }
    case GET_CART:
      console.log(action.payload)
      return { ...state, status: 'loading' }
    case GET_CART_SUCCESS:
      return {
        ...state,
        cart: JSON.parse(action.payload),
      }
    case CLEAR_ITEMS:
      return {
        ...state,
        cart: [],
      }
    default:
      return state
  }
}
export default cartReducer
