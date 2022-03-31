import axios from 'axios'
import {
  ADD_ITEMS,
  ADD_ITEMS_SUCCESS,
  CLEAR_ITEMS,
  GET_CART,
} from '../const/cart'
export const addTOCart =
  ({ id, quantity }) =>
  async (dispatch) => {
    dispatch({ type: ADD_ITEMS })
    try {
      console.log(quantity)
      let result = await axios.get(`product/${id}`)
      let final = { ...result.data.result, quantity }
      dispatch({ type: ADD_ITEMS_SUCCESS, payload: final })
    } catch (error) {
      console.log(error)
    }
  }

export const clearCart = () => async (dispatch) => {
  dispatch({ type: CLEAR_ITEMS })
  try {
    dispatch({ type: CLEAR_ITEMS })
  } catch (error) {
    console.log(error)
  }
}

export const getItems = () => async (dispatch) => {
  dispatch({ type: GET_CART })
  try {
    dispatch({
      type: ADD_ITEMS_SUCCESS,
      payload: localStorage.getItem('cartItems'),
    })
  } catch (error) {
    console.log(error)
  }
}
