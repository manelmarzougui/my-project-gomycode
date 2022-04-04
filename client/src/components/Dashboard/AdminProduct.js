import React, { Fragment } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import Sidebar from './SideBar'
import { MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../../Js/actions/productaction'
import ModaleEdit from '../Product/ModaleEdit'
import AddModel from './AddModel'
import { IoIosAddCircle } from 'react-icons/io'

const AdminProduct = ({ product }) => {
  const products = useSelector((state) => state.productListe.productListe)
  console.log(products)
  const dispatch = useDispatch()

  return (
    <div className='adminproduct'>
      <h1>ALL Product</h1>
      <AddModel />
      <table>
        <tr>
          <th>Name</th>
          <th>Prix</th>
          <th>Quantite</th>
          <th>Category</th>
          <th className='action-act'>Action</th>
        </tr>
        {products?.map((el) => (
          <tr>
            <td>{el?.name}</td>
            <td>{el?.prix}</td>
            <td>{el?.quantite}</td>
            <td>{el?.category}</td>
            <td className='action'>
              <ModaleEdit product={el} />
              {console.log(el)}
              <MdDelete
                className='delete-ico'
                onClick={() => {
                  dispatch(deleteProduct(el?._id))
                }}
              />

              {/* <MdDelete
                className='delete-ico'
                onClick={() => dispatch(deleteProduct(product?._id))}
              /> */}
            </td>
          </tr>
        ))}
      </table>
      {/* <button className='ajouter-prod'>
      
        <AddModel />
        Ajouter Produit
      </button> */}
    </div>
  )
}

export default AdminProduct
