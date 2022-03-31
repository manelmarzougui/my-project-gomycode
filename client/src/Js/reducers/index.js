import { combineReducers } from 'redux'
import { userReducer } from './reducerUser'
import productListe from './productReducers'
import { cartReducer } from './cartReducer'
import orderReducer from './orderReducer'

export const rootReducer = combineReducers({
  userReducer,
  productListe,
  cartReducer,
  orderReducer,
})
