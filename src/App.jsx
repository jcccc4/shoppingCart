import { Routes, Route } from 'react-router-dom';
import {useReducer } from 'react';
import Home from './pages/home/Home';
import Store from './pages/store/Store';
import Checkout from './pages/checkout/Checkout';
import Header from './layouts/header/Header';
import reducer from './reducers/reducer'
import initialState from './reducers/initialstate';
import { ButtonContext } from './contexts/ButtonContext';
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
    console.log('add')
    dispatch({type: "ADD_QUANTITY", payload:{name:name, modelType: modelType}})
  }

  const deductProductHandler = (name, modelType) =>{
    dispatch({type: "REDUCE_QUANTITY", payload:{name:name, modelType: modelType}})
  }
  
  return (
    <div className="App">
      <Header />
      <ButtonContext.Provider value={{addProductHandler,deductProductHandler}} >
        <Routes>
            <Route path="/" element ={<Home />} />
            <Route path={`${mainUrl}/`} element ={<Home />} />
            <Route path={`${mainUrl}/store`} element ={
              <Store  
                itemList={state.products} 
                btnText = 'Add to Cart'
                modelType = 'store'
                clickHandler = {addHandler}
              />} 
            />
            <Route path={`${mainUrl}/checkout`} element ={
              <Checkout 
                itemList={state.checkouts}  
                btnText = 'Delete' 
                modelType = 'checkout' 
                clickHandler = {deleteHandler}
              />} 
            />
          
        </Routes>
      </ButtonContext.Provider>
      
    </div>
  )
}
