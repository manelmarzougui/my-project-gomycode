import React from 'react'
import './orderDetail.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addOrder } from '../../Js/actions/orderaction'
import Swal from 'sweetalert2'
import { clearCart } from '../../Js/actions/cartAction'

const OrderDetail = () => {
  const userinfo = JSON.parse(localStorage.getItem('shipping'))
  const cartItems = JSON.parse(localStorage.getItem('cartt'))
  const navigate = useNavigate()
  const user = useSelector((state) => state.userReducer.user)
  console.log(cartItems)
  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + parseInt(item.final.prix),
    0
  )
  console.log(user)
  const dispatch = useDispatch()
  return (
    <div>
      <div className='orderdetails'>
        <table className='tablee'>
          <td className='user-div'>
            <div className='user_info'>
              <h1>Vous Information</h1>
              <p>Name:{userinfo.name}</p>
              <p>Adresse:{userinfo.adress}</p>
              <p>Code Postal:{userinfo.codepostal}</p>
            </div>
          </td>
          <td>
            <div className='img-orderdetail'>
              <h1>List Des Produits</h1>
              {cartItems.map((el) => (
                <div className='prod-detail'>
                  <img src={el?.final?.image?.im1} alt='' />
                  <h4>{el?.final?.name}</h4>
                  {console.log(el)}
                  <h3>{el?.final?.prix}DT</h3>
                </div>
              ))}
              <div className='order-p'>
                <h4>Livraison:8DT</h4>
                <h4>Total Price:{totalPrice} DT</h4>
                <button
                  onClick={() => {
                    dispatch(
                      addOrder({
                        cartItems: cartItems,
                        shippinginfo: userinfo,
                        prixTotal: totalPrice,
                        ordredBy: user._id,
                      })
                    )
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'commande confirmée',
                      showConfirmButton: false,
                      timer: 1500,
                    })
                    localStorage.removeItem('cartt')
                    localStorage.removeItem('shipping')
                    dispatch(clearCart())
                    navigate('/')
                  }}
                >
                  place order
                </button>
              </div>
            </div>
          </td>
        </table>
      </div>
    </div>
  )
}

export default OrderDetail
