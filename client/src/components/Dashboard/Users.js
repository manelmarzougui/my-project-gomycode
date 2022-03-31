import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getusers } from '../../Js/actions/userAction'

const Users = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getusers())
  }, [])
  const users = useSelector((state) => state.userReducer.users)

  return (
    <div className='adminproduct'>
      <h1>ALL users</h1>
      <table>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>last name</th>
          <th>email</th>
        </tr>
        {users?.map((el) => (
          <tr>
            <td>{el?._id}</td>
            <td>{el?.name}</td>
            <td>{el?.lastName}</td>
            <td>{el?.email}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Users
