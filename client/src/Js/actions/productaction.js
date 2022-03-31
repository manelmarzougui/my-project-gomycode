import axios from 'axios'
import {
  GET_PRODUCT,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_FAIL,
  GET_ONE_PRODUCT,
  GET_ONE_SUCCESS,
  ADD_TO_CART,
} from '../const/productconst'


// get product//
export const getProduct = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCT })
  try {
    let result = await axios.get('product/')
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: result.data })
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAIL, payload: error.data })
  }
}
//gel one product//
export const getOneProduct = (id) => async (dispatch) => {
  dispatch({ type: GET_ONE_PRODUCT })
  try {
    let result = await axios.get(`product/${id}`)
    dispatch({ type: GET_ONE_SUCCESS, payload: result.data })
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAIL, payload: error.data })
    console.log(error)
  }
}
//add product//

export const addProduct = (newContact) => async (dispatch) => {
  try {
    let result = await axios.post('product/addproduct', newContact)
    dispatch({ type: ADD_PRODUCT })
    dispatch(getProduct())
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAIL, payload: error.data })
  }
}
//delete product//

export const deleteProduct = (id) => async (dispatch) => {
  try {
    let result = await axios.delete(`product/${id}`)
    dispatch({ type: DELETE_PRODUCT })
    dispatch(getProduct())
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAIL, payload: error.data })
  }
}
//update product//

export const updateProduct =
  ({ id, modalEdit }) =>
  async (dispatch) => {
    try {
      let result = await axios.put(`product/${id}`, modalEdit)
      dispatch({ type: UPDATE_PRODUCT })
      dispatch(getProduct())
    } catch (error) {
      dispatch({ type: UPDATE_PRODUCT_FAIL })
    }
  }





  //add to cart//

  export const addItemsToCart =
    (id, quantity) => async (dispatch, getState) => {
      const { data } = await axios.get(`product/${id}`)

      dispatch({
        type: ADD_TO_CART,
        payload: {
          product: data.prod._id,
          name: data.prod.name,
          prix: data.prod.prix,
          image: data.prod.images[0].url,
          quantity,
        },
      })

      localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cart.cartItems)
      )
    }