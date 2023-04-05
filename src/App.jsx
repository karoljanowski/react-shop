import React from 'react'
import Menu from './components/Menu'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ShopPage from './pages/ShopPage'
import ItemPage from './pages/ItemPage'
import CartPage from './pages/CartPage'
import OrderPage from './pages/OrderPage'
import ContactPage from './pages/ContactPage'


function App() {

  return (
    <div className="app">
      <Menu />
      <div className="content">
        <Routes>
          <Route exact path='/' element={<MainPage/>}/>
          <Route exact path='/shop' element={<ShopPage/>}/>
          <Route path="/shop/:id" element={<ItemPage />}/>
          <Route path="/cart" element={<CartPage />}/>
          <Route path="/order" element={<OrderPage />}/>
          <Route path="/contact" element={<ContactPage />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
