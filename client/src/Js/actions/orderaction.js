import axios from 'axios'

import {
  ADD_ORDER,
  DELETE_ORDER,
  GET_ONE_ORDER,
  GET_ORDER,
  GET_ORDER_FAIL,
  GET_ORDER_SUCCESS,
  
} from '../const/order'

export const getorder = () => async (dispatch) => {
  dispatch({ type: GET_ORDER })
  try {
    let result = await axios.get('/order/')
    dispatch({ type: GET_ORDER_SUCCESS, payload: result.data })
  } catch (error) {
    dispatch({ type: GET_ORDER_FAIL, payload: error.data })
  }
}

export const addOrder = (newOrder) => async (dispatch) => {
  try {
    let result = await axios.post('/order/', newOrder)
    dispatch({ type: ADD_ORDER })
    dispatch(getorder())
  } catch (error) {
    dispatch({ type: GET_ORDER_FAIL, payload: error.data })
  }
}
export const deleteorders = (id) => async (dispatch) => {
  try {
    let result = await axios.delete(`/order/${id}`)
    dispatch({ type: DELETE_ORDER })
    dispatch(getorder())
  } catch (error) {
    dispatch({ type: GET_ORDER_FAIL, payload: error.data })
  }
}
