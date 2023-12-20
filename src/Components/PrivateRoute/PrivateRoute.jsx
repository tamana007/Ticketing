import React from 'react'
import { Route,Navigate } from 'react-router-dom'
import Dahboard from '../../page/Dahboard/Dahboard'

function PrivateRoute({isAuth}) {


  return isAuth?(
    <Route path='/' element={<Dahboard></Dahboard>}>

    </Route>):(
    <Route path='ticket'>
      <Navigate to="/login"/>

    </Route>
    )

  
  

  }
export default PrivateRoute