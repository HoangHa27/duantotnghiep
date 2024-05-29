import React from 'react'
import {Routes, Route } from 'react-router-dom'
import LoginForm from '../Login/login'
import LayoutHome from '../../Layout/LayoutHome/LayoutHome'
import HomeChildrent from '../../Component/PageChildrents/homechildrent'
import HotelManager from '../../Component/PageChildrents/hotel manager/hotelManager'

const AppContainer: React.FC = () => (
  <>
    <Routes>
      <Route path="/" element={<LoginForm/>} />
      <Route path="/home" element={<LayoutHome/>}>
         <Route index element={<HomeChildrent/>}></Route>
         <Route path='hotel/manager' element={<HotelManager/>}></Route>                                                                                                                                                                                                               
      </Route>
    </Routes>
  </>
)

export default AppContainer
