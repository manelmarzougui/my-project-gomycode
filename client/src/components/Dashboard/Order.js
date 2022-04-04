import React, { useEffect } from 'react'
import { CgDetailsMore } from 'react-icons/cg'
import { MdDelete } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteorders, getorder } from '../../Js/actions/orderaction'
import { deleteProduct } from '../../Js/actions/productaction'

const Order = () => {
  const orders = useSelector((state) => state.orderReducer.orderListe)

 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getorder())
  }, [])



  return (
    <div className='adminproduct'>
      <h1>Orders</h1>
      <table>
        <tr>
          <th>Order Id</th>
          <th>Prix Total</th>
          <th>User Name</th>
          <th className='action-act'>Action</th>
        </tr>
        {orders?.map((el) => (
          <tr>
            <td>{el?._id}</td>
            <td>{el?.prixTotal}</td>
            <td>{el?.shippinginfo?.name}</td>

            <td className='action'>
              <Link to='/orderdetail'>
                {/* <CgDetailsMore className='delete-ico' /> */}
              </Link>
              <MdDelete
                className='delete-ico'
                onClick={() => {
                  dispatch(deleteorders(el?._id))
                }}
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Order
