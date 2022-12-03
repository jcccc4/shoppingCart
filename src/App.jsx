import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import ShopPage from './pages/store/Store'
function App() {


  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <Home />
      <ShopPage />
    </div>
  )
}

export default App
