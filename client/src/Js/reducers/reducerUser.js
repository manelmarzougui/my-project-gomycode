import {
  LOAD_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  REGISTER_USER,
  LOGIN_USER,
  FAIL_USER,
  LOGOUT_USER,
  CURRENT_USER,
} from '../const/userConst'

const initialState = {
  user: null,
  loadUser: false,
  errors: null,
  isAuth: false,
  users: null,
}

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      localStorage.setItem('token', payload.token)
      return { ...state, loadUser: false, user: payload.user, isAuth: true }
    case LOGIN_USER:
      localStorage.setItem('token', payload.token)
      return { ...state, loadUser: false, user: payload.user, isAuth: true }

    case LOAD_USERS:
      return { ...state, loadUser: true }
    case GET_USERS_SUCCESS:
      return { ...state, status: 'success', users: payload.user }
    case GET_USERS_FAIL:
      return { ...state, status: 'fail', errors: payload }
    case CURRENT_USER:
      return { ...state, loadUser: false, isAuth: true, user: payload }

    case FAIL_USER:
      return { ...state, loadUser: false, errors: payload }
    case LOGOUT_USER:
      localStorage.removeItem('token')
      return { user: null, loadUser: false, errors: null, isAuth: false }
    default:
      return state
  }
}
