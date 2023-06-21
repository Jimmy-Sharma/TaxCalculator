import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HouseRentAllowance from '../Components/HouseRentAllowance'
import AdvanceTax from '../Components/AdvanceTax'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HouseRentAllowance/>} />
        <Route path='/advance-tax' element={<AdvanceTax/>} />
    </Routes>
  )
}

export default MainRoutes