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
    setCheckoutList((prevCheckoutItem)=>{
      if(!prevCheckoutItem.hasOwnProperty(name)){
        return {
          ...prevCheckoutItem,
          [`${name}`]: {count: productList[`${name}`].count}        
        }
      } else {
          return {
            ...prevCheckoutItem,
            [`${name}`]: {count: prevCheckoutItem[`${name}`].count+productList[`${name}`].count}        
        }
      }
    })
    setProductList((prevCheckoutItem)=>{
      return {
        ...prevCheckoutItem,
        [`${name}`]: {count: 1}        
      }
    })
  }

  const deleteHandler = (name)=>{
    setCheckoutList((prevState)=>{
      const newState ={...prevState};
      delete newState[`${name}`];
      console.log(newState)
      return newState
    })
  }

  const addProductHandler = (name) =>{
    setProductList((prevProductList)=>{
      if(prevProductList[`${name}`].count == 9){
        return prevProductList;
      } else {
        const currentProductList = {
          ...prevProductList,
          [`${name}`]: {count: prevProductList[`${name}`].count+1}
        }
        return currentProductList
      }
    })
  }

  const deductProductHandler = (name) =>{

    setProductList((prevProductList)=>{
      if(prevProductList[`${name}`].count == 1){
        return prevProductList;
      } else {
        const currentProductList = {
          ...prevProductList,
          [`${name}`]: {count: prevProductList[`${name}`].count-1}
        }
        return currentProductList
      }
    })
  }
  const addCheckoutHandler = (name) =>{
   
    setCheckoutList((prevCheckoutList)=>{
      if(prevCheckoutList[`${name}`].count == 9){
        return prevCheckoutList;
      } else {
        const currentCheckoutList = {
          ...prevCheckoutList,
          [`${name}`]: {count: prevCheckoutList[`${name}`].count+1}
        }
        return currentCheckoutList
      }
    })
  }

  const deductCheckoutHandler = (name) =>{

    setCheckoutList((prevCheckoutList)=>{
      if(prevCheckoutList[`${name}`].count == 1){
        return prevCheckoutList;
      } else {
        const currentCheckoutList = {
          ...prevCheckoutList,
          [`${name}`]: {count: prevCheckoutList[`${name}`].count-1}
        }
        return currentCheckoutList
      }
    })
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
            addItemHandler = {addProductHandler}
            deductItemHandler = {deductProductHandler}
          />} 
        />
        <Route path={`${mainUrl}/checkout`} element ={
          <Checkout 
            itemList={checkoutList}  
            clickHandler={deleteHandler} 
            btnText = 'Delete' 
            addItemHandler = {addCheckoutHandler}
            deductItemHandler = {deductCheckoutHandler}

          />} 
        />
      </Routes>
      
      
    </div>
  )
}
