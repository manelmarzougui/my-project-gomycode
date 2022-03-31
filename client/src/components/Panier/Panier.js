import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './panier.css'
// import Paniercard from './Paniercard'
import { getorder } from '../../Js/actions/orderaction'

import { current } from '../../Js/actions/userAction'
import { Link, useNavigate } from 'react-router-dom'
import { getItems } from '../../Js/actions/cartAction'
const Panier = () => {
  const [prod, setprod] = useState({})
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(current())
  }, [])
  const items = useSelector((state) => state.cartReducer.cart)
  console.log(items)
  const orders = useSelector((state) => state.productListe.orderListe)
  const currentuser = useSelector((state) => state.userReducer.user)
  console.log(orders)

  const [quantity, setQuantity] = useState(0)
  const navigate = useNavigate()
  const increaseQuantity = () => {
    if (prod?.quantite <= quantity) return

    const qty = quantity + 1
    setQuantity(qty)
  }

  const decreaseQuantity = () => {
    if (1 >= quantity) return

    const qty = quantity - 1
    setQuantity(qty)
  }

  return (
    <div>
      <div className='panier-form'>
        <div
          className='content-page'
          style={{
            paddingTop: '30px',
            width: '70vw',

            paddingBottom: '120px',
            marginRight: '50px',
          }}
        >
          <div className='main-content'>
            <div className='cart-det'>
              <h1>Vos achats</h1>

              <h1>Prix ​​unitaire</h1>
              <h1>Prix ​​total</h1>
            </div>
            <div className='content-panier'>
              <div className='content-cart1'>
                <ion-icon
                  name='close-sharp'
                  style={{
                    position: 'absolute',
                    marginLeft: '700px',
                    marginTop: '-50px',
                    cursor: 'pointer',
                  }}
                ></ion-icon>
                <div
                  className='content-cart'
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    // marginRight: '400px',
                  }}
                >
                  {items.length ? (
                    items.map((el) => (
                      <div
                        style={{
                          display: 'flex',
                          marginRight: '20px',
                        }}
                      >
                        <div className='content-cart'>
                          <img src={el.image?.im1}></img>
                          <h6>{el.name}</h6>
                        </div>
                        <div>
                          <div
                            className='price-button'
                            style={{
                              display: 'flex',
                              marginLeft: '200px',

                              marginBottom: '80px',
                            }}
                          >
                            <h5 className='pricee'> {el.prix}</h5>

                            <div className='quantie_panier'>
                              <button
                                className='minus-btn'
                                onClick={decreaseQuantity}
                              >
                                -
                              </button>
                              <input
                                type='text'
                                className='Quant'
                                value={quantity ? quantity : el.quantity}
                              />
                              <button
                                class='plus-btn'
                                id='max1'
                                onClick={increaseQuantity}
                              >
                                +
                              </button>
                            </div>

                            <h5>
                              {quantity
                                ? parseInt(el.prix) * quantity
                                : parseInt(el.prix) * el.quantity}
                              DT
                            </h5>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <h1>Panier vide</h1>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='resumeshop'>
          {/* <h1>Détails</h1> */}
          <div className='content-panier'>
            <div className='contentshop'>
              <div className='Totalshop' style={{ marginTop: '40px' }}>
                {/* <h4>Livraison</h4>
                <h4>8.000DT </h4> */}
              </div>
              <div className='Totalshop'>
                {/* <h4>Total Price</h4>
                <h4>2222Dt </h4> */}
              </div>
            </div>
          </div>
          <div
            style={{
              marginLeft: '40px',
              width: '200px',
              marginTop: '70px',
            }}
            className='boxx-3'
          >
            <div className='btn btn-three' style={{ width: '200px' }}>
              <button
                className='buutn'
                onClick={() => {
                  navigate('/shipping')
                  localStorage.setItem('cartt', JSON.stringify(items))
                }}
              >
                continue D'achat
              </button>
              {/* <button className='buutn'>co</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Panier
