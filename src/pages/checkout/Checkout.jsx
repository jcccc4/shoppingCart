import ProductList from "../../components/ProductList/ProductList"


export default function Checkout({itemList, clickHandler, btnText, addItemHandler, deductItemHandler}) {
  
  return (
    <div className="checkout">
      <div>You are at the Checkout Page.</div>
      <ProductList  itemList={itemList} clickHandler={clickHandler} btnText={btnText} addItemHandler={addItemHandler} deductItemHandler={deductItemHandler}/>
    </div>
  )
}