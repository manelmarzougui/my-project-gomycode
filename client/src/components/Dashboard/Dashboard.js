import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { logout } from '../../Js/actions/userAction'
import AddModel from './AddModel'
import { Typography } from '@material-ui/core'

const Dashboard = () => {
  const dispatch = useDispatch
  const navigate = useNavigate()

  return (
    <div className='dashboard'>
        {/* <AddModel />   */}

      <div className='dashboardContainer'>
        <Typography component='h1'>Dashboard</Typography>

        <div className='dashboardSummary'>
          <div>
           
          </div>
          <div className='dashboardSummaryBox2'>
            <Link to='/adminproduct'>
              <p>Product</p>
              {/* <p>{products && products.length}</p> */}
            </Link>
            <Link to='/adminorder'>
              <p>Orders</p>
              {/* <p>{orders && orders.length}</p> */}
            </Link>
            <Link to='/adminusers'>
              <p>Users</p>
              {/* <p>{users && users.length}</p> */}
            </Link>
          </div>
        </div>

        <div className='lineChart'>{/* <Line data={lineState} /> */}</div>

        <div className='doughnutChart'>
          {/* <Doughnut data={doughnutState} /> */}
        </div>
        <button
          className='logout_btn'
          onClick={() => {
            localStorage.removeItem('token')
            navigate('/login')
          }}
        >
          logout
        </button>
      </div>
    </div>
  )
}

export default Dashboard
