import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
  UPDATE_PRODUCT,
  GET_ONE_PRODUCT,
  GET_ONE_SUCCESS,
  ADD_TO_CART,
} from '../const/productconst'

import { GET_ORDER_FAIL, GET_ORDER, GET_ORDER_SUCCESS } from '../const/order'

const initialState = {
  productListe: [],
  orderListe: [],
  oneProduct: {},
  errors: null,
  status: '',
}
const productListe = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT:
      return { ...state, status: 'request send' }

    case GET_PRODUCT_SUCCESS:
      return { ...state, status: 'success', productListe: payload.result }
    case GET_ONE_PRODUCT:
      return { ...state, status: 'request send' }

    case GET_ONE_SUCCESS:
      return { ...state, status: 'success', oneProduct: payload.result }
    case GET_PRODUCT_FAIL:
      return { ...state, status: 'fail', errors: payload }

    case ADD_PRODUCT:
      return { ...state, status: payload }

    case DELETE_PRODUCT:
      return { ...state, status: payload }

    case UPDATE_PRODUCT:
      return { ...state, status: payload }
    case ADD_TO_CART:
      return { ...state, status: payload }

    case GET_ORDER:
      return { ...state, status: 'request send' }

    case GET_ORDER_SUCCESS:
      return { ...state, status: 'success', orderListe: payload.result }
    case GET_ORDER_FAIL:
      return { ...state, status: 'fail', errors: payload }

    default:
      return state
  }
}
export default productListe
