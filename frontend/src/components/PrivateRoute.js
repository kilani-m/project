import React from 'react'
import { Navigate } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'

const PrivateRoute = ({children}) => {
  return (
    <div>
        {localStorage.getItem("token")? children : <Navigate to = "/login" />}
    </div>
  )
}

export default PrivateRoute