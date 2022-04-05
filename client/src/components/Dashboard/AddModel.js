import React, { useState } from 'react'
import './dashboard.css'
import { addProduct } from '../../Js/actions/productaction'
import { useDispatch } from 'react-redux'
import { CgClose } from 'react-icons/cg'
import { IoIosAddCircle } from 'react-icons/io'

const AddModel = () => {
  const dispatch = useDispatch()
  const [images, setimages] = useState([])
  const [show, setshow] = useState(false)
  const [NewProduct, setNewProduct] = useState({
    name: '',
    image: {},
    prix: '',
    category: '',
    description: '',
  })

  return (
    <div className='modalBackground'>
      <IoIosAddCircle className='update_ico' onClick={() => setshow(!show)} />
      {show ? (
        <div className='addmodale'>
          <CgClose onClick={() => setshow(!show)} className='close-update' />
          <div className='inpt-name'>
            <input
              placeholder='name'
              required
              onChange={(e) =>
                setNewProduct({ ...NewProduct, name: e.target.value })
              }
            />
          </div>
          <div className='inpt-name'>
            <div className='grp_img'>
              <input
                placeholder='image'
                required
                onChange={(e) =>
                  setNewProduct({
                    ...NewProduct,
                    image: { ...NewProduct.image, im1: e.target.value },
                  })
                }
              />
              <input
                placeholder='image'
                required
                onChange={(e) =>
                  setNewProduct({
                    ...NewProduct,
                    image: { ...NewProduct.image, im2: e.target.value },
                  })
                }
              />
              <input
                placeholder='image'
                required
                onChange={(e) =>
                  setNewProduct({
                    ...NewProduct,
                    image: { ...NewProduct.image, im3: e.target.value },
                  })
                }
              />
            </div>
          </div>
          <div className='inpt-name'>
            <input
              placeholder='prix'
              required
              onChange={(e) =>
                setNewProduct({ ...NewProduct, prix: e.target.value })
              }
            />
          </div>
          <div className='inpt-name'>
            <input
              placeholder='category'
              required
              onChange={(e) =>
                setNewProduct({ ...NewProduct, category: e.target.value })
              }
            />
          </div>
          <div className='inpt-name'>
            <input
              placeholder='description'
              required
              onChange={(e) =>
                setNewProduct({ ...NewProduct, description: e.target.value })
              }
            />
          </div>
          <div className='inpt-name'>
            <input
              placeholder='Qnt'
              required
              onChange={(e) =>
                setNewProduct({ ...NewProduct, quantite: e.target.value })
              }
            />
          </div>
          <button onClick={() => dispatch(addProduct(NewProduct))}>add</button>
        </div>
      ) : null}
    </div>
  )
}

export default AddModel
