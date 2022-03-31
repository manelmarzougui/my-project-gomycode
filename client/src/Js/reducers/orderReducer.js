import { GET_ORDER_FAIL, GET_ORDER, GET_ORDER_SUCCESS,DELETE_ORDER } from '../const/order'

const initialState = {
  orderListe: [],

  errors: null,
  status: '',
}
const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ORDER:
      return { ...state, status: 'request send' }

    case GET_ORDER_SUCCESS:
      return { ...state, status: 'success', orderListe: payload.orders }
    case GET_ORDER_FAIL:
      return { ...state, status: 'fail', errors: payload }
    case DELETE_ORDER:
      return { ...state, status: payload }

    default:
      return state
  }
}



export default orderReducer
