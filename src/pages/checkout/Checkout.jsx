import ProductList from "../../components/ProductList/ProductList"


export default function Checkout({itemList, clickHandler, btnText, addItemHandler, deductItemHandler, modelType}) {

  return (
    <div className="checkout">
      <div>You are at the Checkout Page.</div>
      <ProductList 
        itemList={itemList} 
        clickHandler={clickHandler} 
        btnText={btnText} 
        addItemHandler={addItemHandler}
        deductItemHandler={deductItemHandler} 
        modelType={"checkout"}/>
    </div>
  )
}