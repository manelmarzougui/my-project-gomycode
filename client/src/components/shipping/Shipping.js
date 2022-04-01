import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { IoIosAddCircle } from 'react-icons/io'
import { useNavigate } from 'react-router'

import './shipping.css'
const Shipping = () => {
  const [shipping, setshipping] = useState({
    name: '',
    adress: '',
    codepostal: '',
  })
  const [show, setshow] = useState(false)
  const navigate = useNavigate()
  return (
    <div className='shipping'>
      
      <h1>Informations D'expédition</h1>
      <div className='ship-nam'>
        <span>Name:</span>
        <input
          type='text'
          placeholder='name'
          onChange={(e) => setshipping({ ...shipping, name: e.target.value })}
          required
        />
      </div>
      <div className='ship-nam'>
        <span>Adresse:</span>
        <input
          type='text'
          placeholder='adresse'
          onChange={(e) => setshipping({ ...shipping, adress: e.target.value })}
          required
        />
      </div>
      <div className='ship-nam'>
        <span>Code Postal:</span>
        <input
          type='text'
          placeholder='code postal'
          onChange={(e) =>
            setshipping({ ...shipping, codepostal: e.target.value })
          }
          required
        />
      </div>

      <button
        onClick={() => {
          navigate('/orderdetail')
          localStorage.setItem('shipping', JSON.stringify(shipping))
        }}
      >
        order detail
      </button>
    </div>
  )
}

export default Shipping
