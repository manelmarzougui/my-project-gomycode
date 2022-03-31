import React, { useState } from 'react'
import { AiTwotoneEdit } from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'

import { useDispatch } from 'react-redux'
import { updateProduct } from '../../Js/actions/productaction'

const ModaleEdit = ({ product }) => {
  const [modalEdit, setmodalEdit] = useState({})
  const [show, setshow] = useState(false)
  const dispatch = useDispatch()
  const handleEdit = () => {
    dispatch(updateProduct({ id: product._id, modalEdit }))
  }
  return (
    <div>
      <AiTwotoneEdit className='update_ico' onClick={() => setshow(!show)} />

      {show ? (
        <div className='addmodale'>
         
          <CgClose onClick={() => setshow(!show)} className='close-update' />
          <div className='inpt-name'>
            <h4>Name:</h4>
            {/* <button onClick={() => setshow(!show)}>x</button>  */}
            <input
              placeholder='name'
              onChange={(e) =>
                setmodalEdit({ ...modalEdit, name: e.target.value })
              }
            />
          </div>
          <div className='inpt-name'>
            <h4>Image:</h4>{' '}
            <input
              placeholder='image'
              onChange={(e) =>
                setmodalEdit({ ...modalEdit, image: e.target.value })
              }
            />
          </div>
          <div className='inpt-name'>
            <h4> Prix:</h4>
            <input
              placeholder='prix'
              onChange={(e) =>
                setmodalEdit({ ...modalEdit, prix: e.target.value })
              }
            />
          </div>
          <div className='inpt-name'>
            <h4> QTN:</h4>
            <input
              placeholder='qtn'
              onChange={(e) =>
                setmodalEdit({ ...modalEdit, quantite: e.target.value })
              }
            />
          </div>
          <button onClick={() => handleEdit()}>update</button>
        </div>
      ) : null}
    </div>
  )
}

export default ModaleEdit
