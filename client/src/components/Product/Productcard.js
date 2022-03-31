import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../Js/actions/productaction'
import { MdDelete } from 'react-icons/md'
import { AiTwotoneEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import ModaleEdit from './ModaleEdit'
const Productcard = ({ product }) => {
  const dispatch = useDispatch()
  
  return (
    <div>
      <div className='product-card'>
        <Link to={`/${product?._id}`}>
          <img src={product?.image.im1} alt='logo' />
        </Link>
        <h6>{product?.name}</h6>
        <h6>{product?.prix}DT</h6>
      </div>
    
        <div className='bunt-card'>
          {/* <ModaleEdit product={product} /> */}
          {console.log(product)}
          {/* <MdDelete
            className='delete-ico'
            onClick={() => dispatch(deleteProduct(product?._id))}
          /> */}
        </div>
     
    </div>
  )
}

export default Productcard
