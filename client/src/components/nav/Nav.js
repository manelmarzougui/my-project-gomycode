import React, { useEffect, useState } from 'react'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { FaRegHeart } from 'react-icons/fa'
import { FiShoppingBag } from 'react-icons/fi'
import { BiSearchAlt2 } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Panier from '../Panier/Panier'
import './nav.css'
import { useDispatch, useSelector } from 'react-redux'
import { current } from '../../Js/actions/userAction'

const Nav = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(current())
  }, [])
  const [showPanier, setShowPanier] = useState(false)
  const currentuser = useSelector((state) => state.userReducer.user)
  return (
    <div>
      <div className='navv'>
        <div className='logo-title'>
          <h4>Caviar Jewlery</h4>
          <h5>Since 2022-by Manel</h5>
        </div>
        <Link to='/'>
          <img src='./image/Caviar.svg' alt='logo' className='logo' />
        </Link>

        <div className='icons'>
          <div className='icon'>
            {currentuser?.isAdmin ? (
              <Link to='/dashboard'>
                <MdOutlineAccountCircle className='ico' />

                <h6>Dashboard</h6>
              </Link>
            ) : (
              <Link to='/login'>
                <MdOutlineAccountCircle className='ico' />

                <h6>Compte</h6>
              </Link>
            )}
          </div>
          <div className='icon'>
            <FaRegHeart className='ico' />
            <h6>Favoris</h6>
          </div>
          <div className='icon'>
            <Link to='/panier'>
              <FiShoppingBag className='ico' />

              <h6>Panier</h6>
            </Link>
          </div>
        </div>
      </div>
      <div className='liste'>
        <Link to='/bagues'>
          <h3> BAGUES</h3>
        </Link>
        <Link to='/colliers'>
          <h3> COLLIERS</h3>
        </Link>
        <Link to='/bracelets'>
          <h3> BRACELETS</h3>
        </Link>
        <Link to='/boucle'>
          <h3> BOUCLE D’OREILLE</h3>
        </Link>
        <Link to='/mariage'>
          <h3> MARIAGE</h3>
        </Link>
        <Link to='/pierres'>
          <h3>PIERRES</h3>
        </Link>
      </div>
    </div>
  )
}

export default Nav
