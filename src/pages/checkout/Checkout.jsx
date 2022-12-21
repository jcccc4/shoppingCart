import ProductList from "../../components/ProductList/ProductList"


export default function Checkout({itemList, btnText, modelType, clickHandler}) {

  return (
    <div className="checkout">
      <ProductList 
        itemList={itemList} 
        btnText={btnText} 
        modelType={modelType}
        clickHandler={clickHandler}/>
    </div>
  )
}