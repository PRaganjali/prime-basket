import React from 'react'
import './App.css'
import './assets/styles/mystyle.css'
import {Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import Header from './Components/Header'
import ViewMore from './Components/ViewMore'
import CartItems from './Components/CartItems'
import PageNotFound from './Components/PageNotFound'
  
const App = () => {
  return (
    <>
    <Header/>
      <Routes>
                <Route element={<LandingPage/>} path='/'/>
                <Route element={<ViewMore/>} path='/viewmore/:id'/>
                <Route element={<CartItems/>} path='/cart-items' />
                <Route element={<PageNotFound/>} path='/*' />
      </Routes>
    </>
  )
}

export default App
// npx json-server --watch src\jsondata\appdata.json --port 4000