import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/home/Home';
import Store from './pages/store/Store';
import Checkout from './pages/checkout/Checkout';
import Header from './layouts/header/Header';
import './App.css'
import items from './mockList/mockList.json'

export default function App() {
  const mainUrl = "/shoppingCart"
  const [checkoutList, setCheckoutList] = useState({})
  const [productList, setProductList] = useState(items)
  
  const productNames = Object.keys(productList)

  productNames.map((productName) => {
    if(!productList[`${productName}`].hasOwnProperty('count')){
      setProductList((prevProductList) =>{
        const currentProductList = {...prevProductList}
        currentProductList[`${productName}`].count = 1;
        return currentProductList;
      })
    }
  })

  const addHandler = (name)=>{
    setCheckoutList((checkoutItem)=>{
      if(!checkoutItem.hasOwnProperty(name)){
        return {
          ...checkoutItem,
          [`${name}`]: {count: 1}        
        }
      } else {
          return {
            ...checkoutItem,
            [`${name}`]: {count: checkoutItem[`${name}`].count+1}        
        }
      }
    })
  }

  const deleteHandler = ()=>{
    console.log('Delete')
  }


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path={`${mainUrl}/`} element ={<Home />} />
        <Route path={`${mainUrl}/store`} element ={
          <Store  
            itemList={productList} 
            clickHandler={addHandler} 
            btnText = 'Add to Cart'
          />} 
        />
        <Route path={`${mainUrl}/checkout`} element ={
          <Checkout 
            itemList={checkoutList}  
            clickHandler={deleteHandler} 
            btnText = 'Delete' 
          />} 
        />
      </Routes>
      
      
    </div>
  )
}
