import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/home/Home';
import Store from './pages/store/Store';
import Checkout from './pages/checkout/Checkout';
import Header from './layouts/header/Header';
import './app.css'
import items from './mockList/mockList.json'

function App() {
  const mainUrl = "/shoppingCart"
  const [checkoutList, setCheckoutList] = useState([])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path={`${mainUrl}/`} element ={<Home />} />
        <Route path={`${mainUrl}/store`} element ={<Store setCheckoutList={setCheckoutList} items={items}/>} />
        <Route path={`${mainUrl}/checkout`} element ={<Checkout checkoutList={checkoutList} items={items} />} />
      </Routes>
      
      
    </div>
  )
}

export default App
