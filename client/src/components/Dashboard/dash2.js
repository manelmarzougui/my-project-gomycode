import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../js/actions/user'
import { useNavigate } from 'react-router-dom'
import './dashboard.css'

const Dashbord = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const users = useSelector((state) => state.getProduct)
  return (
    <div>
      <h1 style={{ color: 'white' }}> Dashboard </h1>

      <div class='container'>
        <h2>
          ADD ME <small>please</small>
        </h2>
        <ul class='responsive-table'>
          <li class='table-header'>
            <div class='col col-1'>Product id</div>
            <div class='col col-2'>name</div>
            <div class='col col-3'>adresse</div>
            <div class='col col-4'>quantité</div>
            <div class='col col-5'>prix</div>
            <div class='col col-6'>action</div>
          </li>
          {users ? (
            product.map((el) => (
              <li class='table-row'>
                <div class='col col-1'>{el._id}</div>
                <div class='col col-2'>{el.name}</div>
                <div class='col col-3'> {el.quantite}</div>
                <div class='col col-4'> {el.prix}</div>
              </li>
            ))
          ) : (
            <h1>loading</h1>
          )}
        </ul>
      </div>
      <button
        className='belive'
        onClick={() => {
          localStorage.removeItem('token')
          navigate('/compte')
        }}
      >
        connexion
      </button>
    </div>
  )
}

export default Dashbord
