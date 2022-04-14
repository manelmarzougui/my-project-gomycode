import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { addTOCart } from '../../Js/actions/cartAction'
import { addOrder } from '../../Js/actions/orderaction'
import { addItemsToCart } from '../../Js/actions/productaction'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const Description = () => {
  const [prod, setprod] = useState({})
  const [cartItems, setcartItems] = useState([])

  const { Pid } = useParams()
  console.log(Pid)
  const dispatch = useDispatch()

  useEffect(async () => {
    let result = await axios
      .get(`product/${Pid}`)
      .then((res) => setprod(res.data.result))
  }, [])
  useEffect(async () => {
    setimageD(prod?.image?.im1)
  }, [prod])
  const currentuser = useSelector((state) => state.userReducer.user)

  const [quantity, setQuantity] = useState(1)
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
  console.log(quantity)
  const addToCartHandler = () => {
    dispatch(addTOCart({ id: prod._id, quantity }))
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'produit ajouter au panier',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  const [imageD, setimageD] = useState()
  console.log(imageD)

  return (
    <div className='desc'>
      <div className='des-img'>
        <div onClick={() => setimageD(prod?.image?.im1)}>
          <img src={prod?.image?.im1} alt='logo' />
        </div>
        <div onClick={() => setimageD(prod?.image?.im2)}>
          <img src={prod?.image?.im2} alt='logo' />
        </div>
        <div onClick={() => setimageD(prod?.image?.im3)}>
          <img src={prod?.image?.im3} alt='logo' />
        </div>
      </div>

      <div className='details'>
        <img src={imageD || ''} alt='logo' />
        <div className='box-desc'>
          <h3>{prod?.name}</h3>
          <h5>{prod?.prix}DT</h5>
          <h6>Qualité: {prod?.description}</h6>

          <div class='quantity'>
            {' '}
            <button className='minus-btn' onClick={decreaseQuantity}>
              {' '}
              -
            </button>
            <input type='text' className='Quant' value={quantity} />
            <button class='plus-btn' id='max1' onClick={increaseQuantity}>
              +
            </button>
          </div>

          <div className='desc-butn'>
            {/* {currentuser ? ( */}
              <button onClick={addToCartHandler}>Ajouter au panier</button>
            {/* ) : (
             <Link to='/login'>
               <button>tu doit etre connecter pour pouvoir commander</button>
              </Link>
             ) */}
            <button>continue D'achat</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
