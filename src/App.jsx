import { Routes, Route } from 'react-router-dom';
import { useState, useReducer, useEffect } from 'react';
import Home from './pages/home/Home';
import Store from './pages/store/Store';
import Checkout from './pages/checkout/Checkout';
import Header from './layouts/header/Header';
import reducer from './reducers/reducer'
import initialState from './reducers/initialstate';
import './App.css'

export default function App() {
  const mainUrl = "/shoppingCart"

  const [state, dispatch] = useReducer(reducer, initialState());


  const addHandler = (name)=>{
    dispatch({type: "ADD_TO_CART", payload:{name:name}})    
  }

  const deleteHandler = (name)=>{
    dispatch({type: "DELETE_CHECKOUT_ITEM", payload:{name:name}})  
  }

  const addProductHandler = (name, modelType) =>{
    dispatch({type: "ADD_QUANTITY", payload:{name:name, modelType: modelType}})
  }

  const deductProductHandler = (name, modelType) =>{
    dispatch({type: "REDUCE_QUANTITY", payload:{name:name, modelType: modelType}})
  }
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path={`${mainUrl}/`} element ={<Home />} />
        <Route path={`${mainUrl}/store`} element ={
          <Store  
            itemList={{...state.products}} 
            clickHandler={addHandler} 
            btnText = 'Add to Cart'
            modelType = 'store'
            addItemHandler = {addProductHandler}
            deductItemHandler = {deductProductHandler}
            
          />} 
        />
        <Route path={`${mainUrl}/checkout`} element ={
          <Checkout 
            itemList={{...state.checkouts}}  
            clickHandler={deleteHandler} 
            btnText = 'Delete' 
            modelType = 'checkout'
            addItemHandler = {addProductHandler}
            deductItemHandler = {deductProductHandler}

          />} 
        />
      </Routes>
      
      
    </div>
  )
}
