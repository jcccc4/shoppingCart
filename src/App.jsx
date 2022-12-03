import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Store from './pages/store/Store';
import Checkout from './pages/checkout/Checkout';
import Header from './layouts/header/Header';
import './app.css'
function App() {
  const mainUrl = "/shoppingCart"

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/shoppingCart/" element ={<Home />} />
        <Route path="/shoppingCart/store" element ={<Store />} />
        <Route path="/shoppingCart/checkout" element ={<Checkout />} />
      </Routes>
      
      
    </div>
  )
}

export default App
