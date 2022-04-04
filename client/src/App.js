import './App.css'
import { Route, Routes } from 'react-router'
import Signup from './components/signup/Signup'
import Dashboard from './components/Dashboard/Dashboard'
import Register from './components/signup/Register'
import PrivetRoute from './components/router/PrivetRoute'
import { useDispatch, useSelector } from 'react-redux'
import { current } from './Js/actions/userAction'
import { useEffect } from 'react'
import Home from './components/Home/Home'
import Product from './components/Product/Product'
import Description from './components/Description/Description'
import Panier from './components/Panier/Panier'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Bagues from './components/Product/Bagues'
import Colliers from './components/Product/Colliers'
import Bracelets from './components/Product/Bracelets'
import Boucle from './components/Product/Boucle'
import Mariage from './components/Product/Mariage'
import Pierres from './components/Product/Pierres'
import { getProduct } from './Js/actions/productaction'
import { MdContactSupport } from 'react-icons/md'
import Productcard from './components/Product/Productcard'
import ModaleEdit from './components/Product/ModaleEdit'
import AdminProduct from './components/Dashboard/AdminProduct'
import Order from './components/Dashboard/Order'
import Users from './components/Dashboard/Users'
import Shipping from './components/shipping/Shipping'
import OrderDetail from './components/orderDetail/OrderDetail'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(current())
    dispatch(getProduct())
  }, [])

  return (
    <div className='App'>
      <Nav />

      <Routes>
        <Route path='/login' element={<Signup />} />

        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/bagues' element={<Bagues />} />
        <Route path='/colliers' element={<Colliers />} />
        <Route path='/bracelets' element={<Bracelets />} />
        <Route path='/boucle' element={<Boucle />} />
        <Route path='/mariage' element={<Mariage />} />
        <Route path='/pierres' element={<Pierres />} />
        <Route path='/:Pid' element={<Description />} />
        <Route path='/update' element={<ModaleEdit />} />
        <Route path='/panier' element={<Panier />} />
        <Route path='/adminproduct' element={<AdminProduct />} />
        <Route path='/adminorder' element={<Order />} />
        <Route path='/adminusers' element={<Users />} />
        <Route path='/shipping' element={<Shipping />} />
        <Route path='/orderdetail' element={<OrderDetail />} />

        <Route element={<PrivetRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
      <Footer />

    </div>
  )
}

export default App
